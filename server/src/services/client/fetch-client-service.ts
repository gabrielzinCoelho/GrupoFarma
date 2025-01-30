import { PrismaClient, Prisma, Client } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'

interface FetchClientsServiceResponse {
  clients: Client[]
}

export class FetchClientsService {
  constructor(
    private prisma: PrismaClient<
      Prisma.PrismaClientOptions,
      never,
      DefaultArgs
    >,
  ) {}

  async execute(): Promise<FetchClientsServiceResponse> {
    const clients = await this.prisma.client.findMany()

    return { clients }
  }
}
