import { PrismaClient, Prisma } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'
import { Seed } from './Seed'

export class PaymentMethodSeed extends Seed {
  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
  ) {
    super('PaymentMethod', prisma)
  }

  async seed(): Promise<void> {
    await this.prisma.paymentMethod.createMany({
      data: [
        {
          id: '5e368b09-39c9-4a17-b954-e1b5ccd71829',
          name: 'Cartão de Débito',
        },
        {
          id: '2ae3c140-a3d0-4222-8c36-ca14001e353d',
          name: 'Cartão de Crédito',
        },
        {
          id: '274b0fad-42b2-4ecb-a7ca-d4561bd4f66f',
          name: 'Dinheiro',
        },
        {
          id: 'a4f365f9-4ef0-46a1-af1f-ccc569dadbc2',
          name: 'PIX',
        },
      ],
    })
  }

  async reset(): Promise<void> {
    await this.prisma.paymentMethod.deleteMany()
  }
}
