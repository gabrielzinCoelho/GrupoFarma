import { PrismaClient } from '@prisma/client'
import { SalespersonSeed } from './salesperson'
import { Seed } from './Seed'

async function seed() {
  const prisma = new PrismaClient()

  const seedInstances: Seed[] = [new SalespersonSeed(prisma)]

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
