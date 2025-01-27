import { PrismaClient } from '@prisma/client'
import { SalespersonSeed } from './salesperson'
import { Seed } from './Seed'
import { CategorySeed } from './category'
import { ProductSeed } from './product'
import { ClientSeed } from './client'
import { CouponSeed } from './coupon'
import { PaymentMethodSeed } from './payment-method'
import { SaleSeed } from './sale'
import { SaleProductsSeed } from './sale-products'

async function seed() {
  const prisma = new PrismaClient()

  const seedInstances: Seed[] = [
    new ClientSeed(prisma),
    new CouponSeed(prisma),
    new PaymentMethodSeed(prisma),
    new SalespersonSeed(prisma),
    new CategorySeed(prisma),
    new ProductSeed(prisma),
    new SaleSeed(prisma),
    new SaleProductsSeed(prisma),
  ]

  for (const seedInstance of seedInstances.slice().reverse())
    await seedInstance.reset()

  for (const seedInstance of seedInstances) {
    await seedInstance
      .seed()
      .then(() => console.log(`${seedInstance.name} seeded!`))
  }

  await prisma.$disconnect()
}

seed().then(() => {
  console.log('Database seeded!')
})
