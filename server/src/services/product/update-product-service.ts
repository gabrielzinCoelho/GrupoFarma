import { Prisma, PrismaClient, Product } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'
import { CheckIfProductIsActiveService } from './check-if-product-is-active-service'

interface UpdateProductServiceParams {
  id: string
  anvisaCode: string
  name: string
  price: number
  howToUse: string
  sideEffects: string
  categoryId: string
  isActive?: boolean
}

interface UpdateProductServiceResponse {
  product: Product
}

export class UpdateProductService {
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
    anvisaCode,
    name,
    price,
    howToUse,
    sideEffects,
    categoryId,
    isActive = true,
  }: UpdateProductServiceParams): Promise<UpdateProductServiceResponse> {
    this.checkProductService.execute({
      id,
    })

    const product = await this.prisma.product.update({
      where: {
        id,
      },
      data: {
        anvisa_code: anvisaCode,
        name,
        price,
        how_to_use: howToUse,
        side_effects: sideEffects,
        category_id: categoryId,
        is_active: isActive,
      },
    })

    return { product }
  }
}
