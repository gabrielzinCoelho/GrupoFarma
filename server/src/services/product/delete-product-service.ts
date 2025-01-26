import { Product, PrismaClient, Prisma } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'

interface DeleteProductServiceParams {
  id: string
}

interface DeleteProductServiceResponse {
  product: Product
}

export class DeleteProductService {
  constructor(
    private prisma: PrismaClient<
      Prisma.PrismaClientOptions,
      never,
      DefaultArgs
    >,
  ) {}

  async execute({
    id,
  }: DeleteProductServiceParams): Promise<DeleteProductServiceResponse> {
    const product = await this.prisma.product.delete({
      where: {
        id,
      },
    })

    return { product }
  }
}
