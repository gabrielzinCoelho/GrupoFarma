import { PrismaClient, Prisma, Sale } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'

interface DeleteSaleServiceParams {
  id: string
}

interface DeleteSaleServiceResponse {
  sale: Sale
}

export class DeleteSaleService {
  constructor(
    private prisma: PrismaClient<
      Prisma.PrismaClientOptions,
      never,
      DefaultArgs
    >,
  ) {}

  async execute({
    id,
  }: DeleteSaleServiceParams): Promise<DeleteSaleServiceResponse> {
    const sale = await this.prisma.sale.delete({
      where: {
        id,
      },
    })

    return { sale }
  }
}
