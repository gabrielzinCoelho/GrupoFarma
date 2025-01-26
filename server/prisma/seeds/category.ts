import { PrismaClient, Prisma } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'
import { Seed } from './Seed'

export class CategorySeed extends Seed {
  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
  ) {
    super('Category', prisma)
  }

  async seed(): Promise<void> {
    await this.prisma.category.createMany({
      data: [
        {
          id: '2fd4cc8f-4b5d-4bbe-8e03-e011be97e343',
          name: 'Antibiótico',
        },
        {
          id: '838ab197-d7ba-4b30-aa20-b90d629f0f8f',
          name: 'Higiene Pessoal',
        },
        {
          id: '4cba3c62-83bc-410a-9278-96a04d88bb37',
          name: 'Analgesico',
        },
        {
          id: '16354588-71de-497a-845a-7983fcaf06ad',
          name: 'Antiviral',
        },
        {
          id: '9b6ad1bc-6524-4b5e-9bd7-0f820fe8e3ec',
          name: 'Suplementos Alimentares',
        },
      ],
    })
  }

  async reset(): Promise<void> {
    await this.prisma.category.deleteMany()
  }
}
