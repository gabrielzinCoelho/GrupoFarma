import { Product, PrismaClient, Prisma } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'

interface FetchProductsServiceParams {
  page: number
}

interface FetchProductsServiceResponse {
  products: Product[]
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

    const products = await this.prisma.product.findMany({
      skip,
      take: PAGE_SIZE,
    })

    return { products }
  }
}
