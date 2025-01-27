import { PrismaClient, Prisma } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'
import { Seed } from './Seed'

export class ProductSeed extends Seed {
  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
  ) {
    super('Product', prisma)
  }

  async seed(): Promise<void> {
    await this.prisma.product.createMany({
      data: [
        {
          id: 'f92e4369-c532-4877-9df0-d34e5150d91e',
          anvisa_code: 'DTI099817AB',
          name: 'Amoxicilina 500mg',
          price: '17.8',
          how_to_use: 'Uso diário. 2 comprimidos a cada 2 horas.',
          side_effects:
            'O uso prolongado pode resultar em febre e dores de cabeça.',
          category_id: '2fd4cc8f-4b5d-4bbe-8e03-e011be97e343',
        },
        {
          id: 'e94b930d-c6c8-49a1-b7fc-4d705f2537f9',
          anvisa_code: 'DTI049823BB',
          name: 'Cefalexina 500mg',
          price: '25.3',
          how_to_use: 'Tomar 1 cápsula de 8/8 horas.',
          side_effects: 'Pode causar náuseas e diarreia.',
          category_id: '2fd4cc8f-4b5d-4bbe-8e03-e011be97e343',
        },
        {
          id: 'c28bbdfb-b706-44e4-bd4d-6fa58f47c5e1',
          anvisa_code: 'DTI345670AB',
          name: 'Clavulanato de Potássio 500mg',
          price: '32.5',
          how_to_use: 'Tomar 1 comprimido a cada 12 horas, após as refeições.',
          side_effects: 'Pode causar diarreia e dores abdominais.',
          category_id: '2fd4cc8f-4b5d-4bbe-8e03-e011be97e343',
        },
        {
          id: '8a76b5b2-32c5-4f9c-8e6e-67a5eaf1baf0',
          anvisa_code: 'DTI682021AB',
          name: 'Ciprofloxacino 500mg',
          price: '18.9',
          how_to_use: 'Tomar 1 comprimido de 12/12 horas.',
          side_effects: 'Pode causar náuseas, tontura e sensibilidade à luz.',
          category_id: '2fd4cc8f-4b5d-4bbe-8e03-e011be97e343',
        },
        {
          id: 'f56c1329-d5a3-4827-b47a-e4db93a7e7f2',
          anvisa_code: 'DPI387462AB',
          name: 'Sabonete Líquido Neutro',
          price: '8.5',
          how_to_use: 'Aplicar no corpo molhado, massagear e enxaguar.',
          side_effects: 'Pode causar irritação em pele sensível.',
          category_id: '838ab197-d7ba-4b30-aa20-b90d629f0f8f',
        },
        {
          id: 'cb6c9e79-238f-490e-8149-6ff35f3f7f0f',
          anvisa_code: 'DPI102930BB',
          name: 'Creme Hidratante para Pele',
          price: '18.9',
          how_to_use: 'Aplicar na pele após o banho.',
          side_effects: 'Pode deixar a pele oleosa se usado em excesso.',
          category_id: '838ab197-d7ba-4b30-aa20-b90d629f0f8f',
        },
        {
          id: 'f36c974e-e97f-47e4-9bc4-7d63d48c9fef',
          anvisa_code: 'DTA231890AB',
          name: 'Dipirona Sódica 500mg',
          price: '12.7',
          how_to_use: 'Tomar 1 comprimido a cada 6 horas, se necessário.',
          side_effects: 'Pode causar sonolência e reações alérgicas.',
          category_id: '4cba3c62-83bc-410a-9278-96a04d88bb37',
        },
        {
          id: 'a7520c09-d171-4f6f-a9f6-5d615f728f2f',
          anvisa_code: 'DTA753186BB',
          name: 'Paracetamol 750mg',
          price: '10.5',
          how_to_use: 'Tomar 1 comprimido de 8/8 horas.',
          side_effects: 'Pode causar reações alérgicas em algumas pessoas.',
          category_id: '4cba3c62-83bc-410a-9278-96a04d88bb37',
        },
        {
          id: 'b125d0d7-bcb6-4674-b8e5-3c693d2f3c2e',
          anvisa_code: 'DTV287506AB',
          name: 'Oseltamivir 75mg',
          price: '45.0',
          how_to_use: 'Tomar 1 cápsula 2 vezes ao dia, durante 5 dias.',
          side_effects: 'Pode causar náuseas e dores de cabeça.',
          category_id: '16354588-71de-497a-845a-7983fcaf06ad',
        },
        {
          id: 'f4f9e6a7-e105-478f-b0a6-0de2d22e756f',
          anvisa_code: 'DTV563890BB',
          name: 'Zidovudina 300mg',
          price: '95.0',
          how_to_use: 'Tomar 1 comprimido 2 vezes ao dia.',
          side_effects: 'Pode causar fadiga e perda de apetite.',
          category_id: '16354588-71de-497a-845a-7983fcaf06ad',
        },
        {
          id: '2c7f9054-9abf-4b38-b30e-dc51576b8135',
          anvisa_code: 'DSA475692AB',
          name: 'Vitamina C 500mg',
          price: '29.9',
          how_to_use: 'Tomar 1 cápsula por dia.',
          side_effects: 'O uso excessivo pode causar dores de estômago.',
          category_id: '9b6ad1bc-6524-4b5e-9bd7-0f820fe8e3ec',
        },
        {
          id: '8c2b226d-8319-440b-9c0c-dcbadeb11538',
          anvisa_code: 'DSA978534BB',
          name: 'Ômega 3 1000mg',
          price: '35.4',
          how_to_use: 'Tomar 1 cápsula ao dia.',
          side_effects: 'Pode causar gosto de peixe na boca.',
          category_id: '9b6ad1bc-6524-4b5e-9bd7-0f820fe8e3ec',
        },
      ],
    })
  }

  async reset(): Promise<void> {
    await this.prisma.product.deleteMany()
  }
}
