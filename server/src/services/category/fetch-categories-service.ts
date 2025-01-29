import { PrismaClient, Prisma, Category } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'

interface FetchCategoriesServiceResponse {
  categories: Category[]
}

export class FetchCategoriesService {
  constructor(
    private prisma: PrismaClient<
      Prisma.PrismaClientOptions,
      never,
      DefaultArgs
    >,
  ) {}

  async execute(): Promise<FetchCategoriesServiceResponse> {
    const categories = await this.prisma.category.findMany()

    return { categories }
  }
}
