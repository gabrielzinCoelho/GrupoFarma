import { PrismaClient, Prisma } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'
import { Seed } from './Seed'

export class SaleProductsSeed extends Seed {
  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
  ) {
    super('SaleProducts', prisma)
  }

  async seed(): Promise<void> {
    await this.prisma.sale_Products.createMany({
      data: [
        {
          id: '7a3d1c62-5b14-47f4-bd07-68b5a2e52e9f',
          sale_id: 'cfd1914b-7e13-4e64-84e2-a64c3b0bc9fc',
          product_id: 'f92e4369-c532-4877-9df0-d34e5150d91e',
          amount: 2,
          price: 17.8,
        },
        {
          id: '1e58f7cd-9c42-4bc1-bf35-fd987c6dd394',
          sale_id: 'cfd1914b-7e13-4e64-84e2-a64c3b0bc9fc',
          product_id: 'e94b930d-c6c8-49a1-b7fc-4d705f2537f9',
          amount: 1,
          price: 25.3,
        },
        {
          id: '3c0f2ae9-7b4d-4b8c-b6b1-8f8b0c73a2e5',
          sale_id: 'cfd1914b-7e13-4e64-84e2-a64c3b0bc9fc',
          product_id: 'f36c974e-e97f-47e4-9bc4-7d63d48c9fef',
          amount: 1,
          price: 12.7,
        },
        {
          id: 'd2f5a8a3-09c8-44fa-8b29-6e6e10bca972',
          sale_id: '396b9609-8a44-4091-a9a8-d540d9382d75',
          product_id: 'c28bbdfb-b706-44e4-bd4d-6fa58f47c5e1',
          amount: 1,
          price: 32.5,
        },
        {
          id: 'fba63b6e-b1fc-4a76-9d92-543a5ea759b8',
          sale_id: '396b9609-8a44-4091-a9a8-d540d9382d75',
          product_id: '8a76b5b2-32c5-4f9c-8e6e-67a5eaf1baf0',
          amount: 2,
          price: 18.9,
        },
        {
          id: '4df3a0d5-5c6b-44a3-9233-7f8b6f47ad38',
          sale_id: '396b9609-8a44-4091-a9a8-d540d9382d75',
          product_id: 'b125d0d7-bcb6-4674-b8e5-3c693d2f3c2e',
          amount: 1,
          price: 45.0,
        },
        {
          id: '8e91f79c-4c64-49d4-bfa2-b91b9a067cfa',
          sale_id: '396b9609-8a44-4091-a9a8-d540d9382d75',
          product_id: '8c2b226d-8319-440b-9c0c-dcbadeb11538',
          amount: 1,
          price: 35.4,
        },
        {
          id: 'e3c5d6a7-798d-4d7a-9a13-bf74a45cf72e',
          sale_id: '084919e3-99c9-439d-a9a1-16366535e2b3',
          product_id: 'f4f9e6a7-e105-478f-b0a6-0de2d22e756f',
          amount: 1,
          price: 95.0,
        },
        {
          id: 'a1b2c3d4-5678-9101-1121-314151617181',
          sale_id: '084919e3-99c9-439d-a9a1-16366535e2b3',
          product_id: '2c7f9054-9abf-4b38-b30e-dc51576b8135',
          amount: 1,
          price: 29.9,
        },
      ],
    })
  }

  async reset(): Promise<void> {
    await this.prisma.sale_Products.deleteMany()
  }
}
