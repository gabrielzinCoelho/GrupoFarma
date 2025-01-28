import { Product, PrismaClient, Prisma } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'
import { IsProductInactiveError } from '../errors/is-product-inactive-error'

interface CheckIfProductIsActiveServiceParams {
  id: string
}

interface CheckIfProductIsActiveServiceResponse {
  product: {
    _count: {
      saleProducts: number
    }
  } & Product
}

export class CheckIfProductIsActiveService {
  constructor(
    private prisma: PrismaClient<
      Prisma.PrismaClientOptions,
      never,
      DefaultArgs
    >,
  ) {}

  async execute({
    id,
  }: CheckIfProductIsActiveServiceParams): Promise<CheckIfProductIsActiveServiceResponse> {
    const product = await this.prisma.product.findUniqueOrThrow({
      where: {
        id,
      },
      include: {
        _count: {
          select: {
            saleProducts: true,
          },
        },
      },
    })

    if (!product.is_active) throw new IsProductInactiveError()
    return { product }
  }
}
