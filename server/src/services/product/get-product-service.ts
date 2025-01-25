import { Product, PrismaClient, Prisma } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'

interface GetProductsServiceParams {
  id: string
}

interface GetProductsServiceResponse {
  product: Product
}

export class GetProductsService {
  constructor(
    private prisma: PrismaClient<
      Prisma.PrismaClientOptions,
      never,
      DefaultArgs
    >,
  ) {}

  async execute({
    id,
  }: GetProductsServiceParams): Promise<GetProductsServiceResponse> {
    const product = await this.prisma.product.findUniqueOrThrow({
      where: {
        id,
      },
    })

    return { product }
  }
}
