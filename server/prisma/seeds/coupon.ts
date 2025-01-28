import { PrismaClient, Prisma } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'
import { Seed } from './Seed'

export class CouponSeed extends Seed {
  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
  ) {
    super('Coupon', prisma)
  }

  async seed(): Promise<void> {
    await this.prisma.coupon.createMany({
      data: [
        {
          id: '67d38180-db04-4251-aa0c-b96212d25819',
          name: 'MENOS20',
          discount_percentage: 20,
        },
        {
          id: 'b5f22866-be5c-45b7-9261-72920b2789b0',
          name: 'APP10',
          discount_percentage: 10,
        },
        {
          id: '61754928-8483-4f2a-97d4-acdf3301f417',
          name: 'SALDO15',
          discount_percentage: 15,
        },
      ],
    })
  }

  async reset(): Promise<void> {
    await this.prisma.coupon.deleteMany()
  }
}
