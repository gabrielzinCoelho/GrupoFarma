import { Prisma, PrismaClient } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'

export abstract class Seed {
  constructor(
    public name: string,
    public prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
  ) {}

  abstract seed(): Promise<void>
  abstract reset(): Promise<void>
}
