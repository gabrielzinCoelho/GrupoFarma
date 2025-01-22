import { hash } from 'bcryptjs'
import { Seed } from './Seed'
import { Prisma, PrismaClient } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'

export class SalespersonSeed extends Seed {
  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
  ) {
    super('Salesperson', prisma)
  }

  async seed(): Promise<void> {
    await this.prisma.salesperson.create({
      data: {
        id: '010905bf-e931-459e-b9f7-626420973fda',
        email: 'gabriel.costa18@estudante.ufla.br',
        name: 'Gabriel Coelho',
        password_hash: await hash('senha321', 6),
      },
    })
  }

  async reset(): Promise<void> {
    await this.prisma.salesperson.deleteMany()
  }
}
