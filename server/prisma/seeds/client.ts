import { PrismaClient, Prisma } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'
import { Seed } from './Seed'

export class ClientSeed extends Seed {
  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
  ) {
    super('Client', prisma)
  }

  async seed(): Promise<void> {
    await this.prisma.client.createMany({
      data: [
        {
          id: '3a880c73-6fcc-4403-a769-ee227b9b4b87',
          name: 'Matheus Pereira',
          cpf: '021.789.786-39',
          email: 'matheuspereira@gmail.com',
        },
        {
          id: 'e16dd2e2-ef2f-4714-9a6e-20f92238a07a',
          name: 'Luis Suárez',
          cpf: '041.657.566-22',
          email: 'luis_suarez@gmail.com',
        },
        {
          id: 'cd125456-25f5-45cc-9af9-b69ee484dfcc',
          name: 'Ricardo Goulart',
          cpf: '076.621.324-97',
          email: 'goulartricardo@gmail.com',
        },
        {
          id: '1f1c4ae1-3e11-432b-bb62-58e631b85211',
          name: 'Antônio Nunes',
          cpf: '032.431.865-17',
          email: 'antonionunes@gmail.com',
        },
        {
          id: 'eb68971c-0a73-4b83-8494-b4a5774fec09',
          name: 'Daniel Paladino',
          cpf: '012.231.743-78',
          email: 'danielpaladino@gmail.com',
        },
      ],
    })
  }

  async reset(): Promise<void> {
    await this.prisma.client.deleteMany()
  }
}
