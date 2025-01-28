import { PrismaClient, Prisma, Sale } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'

interface UpdateSaleServiceParams {
  id: string
  client: string
  salesperson: string
  paymentMethod: string
  coupon?: string
  deliveryFee: number
  products: {
    id: string
    amount: number
    price: number
  }[]
}

interface UpdateSaleServiceResponse {
  sale: Sale
}

export class UpdateSaleService {
  constructor(
    private prisma: PrismaClient<
      Prisma.PrismaClientOptions,
      never,
      DefaultArgs
    >,
  ) {}

  async execute({
    id: saleId,
    client,
    salesperson,
    paymentMethod,
    deliveryFee,
    coupon,
    products,
  }: UpdateSaleServiceParams): Promise<UpdateSaleServiceResponse> {
    const previousProducts = await this.prisma.sale.findUniqueOrThrow({
      where: {
        id: saleId,
      },
      include: {
        saleProducts: true,
      },
    })

    const currentProductsInstances = await Promise.all(
      products.map(
        async (product) =>
          await this.prisma.product.findUniqueOrThrow({
            where: {
              id: product.id,
            },
          }),
      ),
    )

    // busca produto com registro anterior na venda na lista de novos produtos para identificar produtos removidos
    const removedProducts = previousProducts.saleProducts.filter(
      (prevProduct) => {
        for (const currentProduct of currentProductsInstances)
          if (currentProduct.id === prevProduct.product_id) return false
        return true
      },
    )

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
          )

    let totalPrice = 0

    products.forEach(
      (product) => (totalPrice += product.price * product.amount),
    )
    totalPrice += deliveryFee
    totalPrice *= 1 - couponDiscountPercent / 100

    const results = await this.prisma.$transaction([
      // atualiza e insere produtos associados à venda
      ...currentProductsInstances.map((currentProduct, index) =>
        this.prisma.sale_Products.upsert({
          where: {
            sale_id_product_id: {
              sale_id: saleId,
              product_id: currentProduct.id,
            },
          },
          update: {
            amount: products[index].amount,
            price: products[index].price,
          },
          create: {
            amount: products[index].amount,
            price: products[index].price,
            sale_id: saleId,
            product_id: currentProduct.id,
          },
        }),
      ),
      // remove produtos descartados da venda
      this.prisma.sale_Products.deleteMany({
        where: {
          sale_id: saleId,
          product_id: {
            in: removedProducts.map((saleProduct) => saleProduct.product_id),
          },
        },
      }),
      // atualiza venda
      this.prisma.sale.update({
        where: {
          id: saleId,
        },
        data: {
          client_id: client,
          payment_method_id: paymentMethod,
          salesperson_id: salesperson,
          total_price: totalPrice,
          coupon_id: coupon,
          delivery_fee: deliveryFee,
        },
      }),
    ])

    return { sale: results[results.length - 1] as Sale }
  }
}
