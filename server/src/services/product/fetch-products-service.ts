import { Product, PrismaClient, Prisma, Category } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'

interface FetchProductsServiceParams {
  page?: number
  onlyActives: boolean
}

interface FetchProductsServiceResponse {
  products: (Product & {
    category: Category
  })[]
  total: number
}

export class FetchProductsService {
  constructor(
    private prisma: PrismaClient<
      Prisma.PrismaClientOptions,
      never,
      DefaultArgs
    >,
  ) {}

  async execute({
    page,
    onlyActives,
  }: FetchProductsServiceParams): Promise<FetchProductsServiceResponse> {
    const PAGE_SIZE = 10

    const pageParam = page
      ? {
          skip: (page - 1) * PAGE_SIZE,
          take: PAGE_SIZE,
        }
      : undefined

    const whereCondition = onlyActives ? { is_active: true } : {}

    const [products, total] = await this.prisma.$transaction([
      this.prisma.product.findMany({
        where: whereCondition,
        ...pageParam,
        include: {
          category: true,
        },
      }),
      this.prisma.product.count({
        where: whereCondition,
      }),
    ])

    return { products, total }
  }
}
