import { Prisma, PrismaClient } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'

interface FetchSalesServiceParams {
  page: number
}

type SalePopulated = Prisma.SaleGetPayload<{
  include: {
    client: true
    salesperson: true
  }
}>

interface FetchSalesServiceResponse {
  sales: SalePopulated[]
  total: number
}

export class FetchSalesService {
  constructor(
    private prisma: PrismaClient<
      Prisma.PrismaClientOptions,
      never,
      DefaultArgs
    >,
  ) {}

  async execute({
    page,
  }: FetchSalesServiceParams): Promise<FetchSalesServiceResponse> {
    const PAGE_SIZE = 10
    const skip = (page - 1) * PAGE_SIZE

    const [sales, total] = await this.prisma.$transaction([
      this.prisma.sale.findMany({
        skip,
        take: PAGE_SIZE,
        include: {
          client: true,
          salesperson: true,
        },
      }),
      this.prisma.sale.count(),
    ])

    return { sales, total }
  }
}
