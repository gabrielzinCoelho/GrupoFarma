import { PrismaClient, Prisma } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'
import { CheckIfProductIsActiveService } from './check-if-product-is-active-service'

interface GetProductsServiceParams {
  id: string
}

interface GetProductsServiceResponse {
  product: Prisma.ProductGetPayload<{
    include: {
      category: true
    }
  }>
}

export class GetProductsService {
  constructor(
    private prisma: PrismaClient<
      Prisma.PrismaClientOptions,
      never,
      DefaultArgs
    >,
    private checkProductService: CheckIfProductIsActiveService,
  ) {}

  async execute({
    id,
  }: GetProductsServiceParams): Promise<GetProductsServiceResponse> {
    await this.checkProductService.execute({
      id,
    })

    const product = await this.prisma.product.findUniqueOrThrow({
      where: {
        id,
      },
      include: {
        category: true,
      },
    })

    return {
      product,
    }
  }
}
