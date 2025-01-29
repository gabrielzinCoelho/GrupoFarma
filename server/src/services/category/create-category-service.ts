import { PrismaClient, Prisma, Category } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'

interface CreateCategoryServiceParams {
  id: number
  name: string
}

interface CreateCategoryServiceResponse {
  category : Category
}

export class CreateCategoryService {
  constructor(
    private prisma: PrismaClient<
      Prisma.PrismaClientOptions,
      never,
      DefaultArgs
    >,
  ) {}

  async execute({
    id,
    name,
  }: CreateCategoryServiceParams): Promise<CreateCategoryServiceResponse> {
    const category = await this.prisma.category.create({
      data: {
        id: id,
        name: name,
      },
    })

    return { category }
  }
}
