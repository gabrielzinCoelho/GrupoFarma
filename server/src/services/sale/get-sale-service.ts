import { Prisma, PrismaClient } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'

interface GetSaleServiceParams {
  id: string
}

type SalePopulated = Prisma.SaleGetPayload<{
  include: {
    client: true
    paymentMethod: true
    salesperson: true
    coupon: true
    saleProducts: {
      include: {
        product: true
      }
    }
  }
}>

interface GetSaleServiceResponse {
  sale: SalePopulated
}

export class GetSaleService {
  constructor(
    private prisma: PrismaClient<
      Prisma.PrismaClientOptions,
      never,
      DefaultArgs
    >,
  ) {}

  async execute({ id }: GetSaleServiceParams): Promise<GetSaleServiceResponse> {
    const sale = await this.prisma.sale.findUniqueOrThrow({
      where: {
        id,
      },
      include: {
        client: true,
        paymentMethod: true,
        salesperson: true,
        coupon: true,
        saleProducts: {
          include: {
            product: true,
          },
        },
      },
    })

    return { sale }
  }
}
