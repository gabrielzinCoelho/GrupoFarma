import { PrismaClient } from '@prisma/client'
import { SalespersonSeed } from './salesperson'
import { Seed } from './Seed'
import { CategorySeed } from './category'
import { ProductSeed } from './product'

async function seed() {
  const prisma = new PrismaClient()

  const seedInstances: Seed[] = [
    new SalespersonSeed(prisma),
    new CategorySeed(prisma),
    new ProductSeed(prisma),
  ]

  for (const seedInstance of seedInstances) {
    await seedInstance
      .reset()
      .then(() => seedInstance.seed())
      .then(() => console.log(`${seedInstance.name} seeded!`))
  }

  await prisma.$disconnect()
}

seed().then(() => {
  console.log('Database seeded!')
})
