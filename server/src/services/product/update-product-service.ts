import { Prisma, PrismaClient, Product } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'

interface UpdateProductServiceParams {
  id: string
  anvisaCode: string
  name: string
  price: number
  howToUse: string
  sideEffects: string
  categoryId: string
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
  ) {}

  async execute({
    id,
    anvisaCode,
    name,
    price,
    howToUse,
    sideEffects,
    categoryId,
  }: UpdateProductServiceParams): Promise<UpdateProductServiceResponse> {
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
      },
    })

    return { product }
  }
}
