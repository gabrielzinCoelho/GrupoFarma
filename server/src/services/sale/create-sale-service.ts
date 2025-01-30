import { PrismaClient, Prisma, Sale } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

// Export the interfaces
export interface CreateSaleServiceParams {
  client: string;
  salesperson: string;
  paymentMethod: string;
  coupon?: string;
  deliveryFee: number;
  products: {
    id: string;
    amount: number;
  }[];
}

export interface CreateSaleServiceResponse {
  sale: Sale;
}

export class CreateSaleService {
  constructor(
    private prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
  ) {}

  async execute({
    client,
    salesperson,
    paymentMethod,
    deliveryFee,
    coupon,
    products,
  }: CreateSaleServiceParams): Promise<CreateSaleServiceResponse> {
    const productsInstances = await Promise.all(
      products.map(
        async (product) =>
          await this.prisma.product.findUniqueOrThrow({
            where: {
              id: product.id,
              is_active: true,
            },
          }),
      ),
    );
    const couponDiscountPercent = !coupon
      ? 0
      : await this.prisma.coupon
          .findUniqueOrThrow({
            where: {
              id: coupon,
            },
          })
          .then((couponInstance) =>
            couponInstance.discount_percentage.toNumber(),
          );

    let totalPrice = 0;

    productsInstances.forEach(
      (product, index) =>
        (totalPrice += product.price.toNumber() * products[index].amount),
    );
    totalPrice += deliveryFee;
    totalPrice *= 1 - couponDiscountPercent / 100;

    const sale = await this.prisma.sale.create({
      data: {
        client_id: client,
        payment_method_id: paymentMethod,
        salesperson_id: salesperson,
        total_price: totalPrice,
        coupon_id: coupon,
        delivery_fee: deliveryFee,
        saleProducts: {
          createMany: {
            data: productsInstances.map((product, index) => ({
              amount: products[index].amount,
              price: product.price,
              product_id: product.id,
            })),
          },
        },
      },
    });

    return { sale };
  }
}