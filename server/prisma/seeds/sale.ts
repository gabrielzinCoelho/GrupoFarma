import { PrismaClient, Prisma } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'
import { Seed } from './Seed'

export class SaleSeed extends Seed {
  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
  ) {
    super('Sale', prisma)
  }

  async seed(): Promise<void> {
    await this.prisma.sale.createMany({
      data: [
        {
          id: 'cfd1914b-7e13-4e64-84e2-a64c3b0bc9fc',
          client_id: '3a880c73-6fcc-4403-a769-ee227b9b4b87',
          payment_method_id: '5e368b09-39c9-4a17-b954-e1b5ccd71829',
          salesperson_id: '010905bf-e931-459e-b9f7-626420973fda',
          total_price: 64.2,
          delivery_fee: 0,
          coupon_id: '67d38180-db04-4251-aa0c-b96212d25819',
        },
        {
          id: '396b9609-8a44-4091-a9a8-d540d9382d75',
          client_id: 'e16dd2e2-ef2f-4714-9a6e-20f92238a07a',
          payment_method_id: '274b0fad-42b2-4ecb-a7ca-d4561bd4f66f',
          salesperson_id: 'eb305791-26fe-4cb3-9442-a25d1e2b3bb0',
          total_price: 134.64,
          delivery_fee: 8.5,
          coupon_id: '61754928-8483-4f2a-97d4-acdf3301f417',
        },
        {
          id: '084919e3-99c9-439d-a9a1-16366535e2b3',
          client_id: 'cd125456-25f5-45cc-9af9-b69ee484dfcc',
          payment_method_id: 'a4f365f9-4ef0-46a1-af1f-ccc569dadbc2',
          salesperson_id: '010905bf-e931-459e-b9f7-626420973fda',
          total_price: 85.32,
          delivery_fee: 7,
          coupon_id: null,
        },
      ],
    })
  }

  async reset(): Promise<void> {
    await this.prisma.sale.deleteMany()
  }
}
