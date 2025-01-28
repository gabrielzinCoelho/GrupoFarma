import { Product, PrismaClient, Prisma } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'
import { CheckIfProductIsActiveService } from './check-if-product-is-active-service'

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
    private checkProductService: CheckIfProductIsActiveService,
  ) {}

  async execute({
    id,
  }: GetProductsServiceParams): Promise<GetProductsServiceResponse> {
    const {
      // eslint-disable-next-line
      product: { _count, ...product },
    } = await this.checkProductService.execute({
      id,
    })

    return {
      product,
    }
  }
}
