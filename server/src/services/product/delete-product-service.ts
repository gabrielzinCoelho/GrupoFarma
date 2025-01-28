import { Product, PrismaClient, Prisma } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'
import { CheckIfProductIsActiveService } from './check-if-product-is-active-service'
import { UpdateProductService } from './update-product-service'

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
    private checkProductService: CheckIfProductIsActiveService,
    private updateProductService: UpdateProductService,
  ) {}

  async execute({
    id,
  }: DeleteProductServiceParams): Promise<DeleteProductServiceResponse> {
    const { product: checkProduct } = await this.checkProductService.execute({
      id,
    })

    if (checkProduct._count.saleProducts !== 0) {
      this.updateProductService.execute({
        id: checkProduct.id,
        anvisaCode: checkProduct.anvisa_code,
        name: checkProduct.name,
        price: checkProduct.price.toNumber(),
        howToUse: checkProduct.how_to_use,
        sideEffects: checkProduct.side_effects,
        categoryId: checkProduct.category_id,
        isActive: false,
      })
    }

    const product = await this.prisma.product.delete({
      where: {
        id,
      },
    })

    return { product }
  }
}
