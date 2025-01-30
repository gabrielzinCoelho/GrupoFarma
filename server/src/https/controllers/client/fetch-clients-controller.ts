import { prisma } from '@/lib/prisma'
import { FetchClientsService } from '@/services/client/fetch-client-service'
import { FastifyReply, FastifyRequest } from 'fastify'

export const fetchClients = async (req: FastifyRequest, res: FastifyReply) => {
  const fetchClientsService = new FetchClientsService(prisma)

  const { clients } = await fetchClientsService.execute()

  return res.status(200).send({
    clients,
  })
}
