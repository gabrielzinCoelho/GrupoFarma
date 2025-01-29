import { Prisma, PrismaClient, Product } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'

interface CreateProductServiceParams {
  anvisaCode: string
  name: string
  price: number
  howToUse: string
  sideEffects: string
  category: string
}

interface CreateProductServiceResponse {
  product: Product
}

export class CreateProductService {
  constructor(
    private prisma: PrismaClient<
      Prisma.PrismaClientOptions,
      never,
      DefaultArgs
    >,
  ) {}

  async execute({
    anvisaCode,
    name,
    price,
    howToUse,
    sideEffects,
    category,
  }: CreateProductServiceParams): Promise<CreateProductServiceResponse> {
    const product = await this.prisma.product.create({
      data: {
        anvisa_code: anvisaCode,
        name,
        price,
        how_to_use: howToUse,
        side_effects: sideEffects,
        category_id: category,
      },
    })

    return { product }
  }
}
