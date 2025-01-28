import { Product, PrismaClient, Prisma, Category } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'

interface FetchProductsServiceParams {
  page: number
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
  }: FetchProductsServiceParams): Promise<FetchProductsServiceResponse> {
    const PAGE_SIZE = 10
    const skip = (page - 1) * PAGE_SIZE

    const [products, total] = await this.prisma.$transaction([
      this.prisma.product.findMany({
        where: {
          is_active: true,
        },
        skip,
        take: PAGE_SIZE,
        include: {
          category: true,
        },
      }),
      this.prisma.product.count(),
    ])

    return { products, total }
  }
}
