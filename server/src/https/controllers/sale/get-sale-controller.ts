import { prisma } from '@/lib/prisma'
import { GetSaleService } from '@/services/sale/get-sale-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export const getSale = async (req: FastifyRequest, res: FastifyReply) => {
  const getSalesParamsSchema = z.object({
    id: z.string().uuid(),
  })

  const { id } = getSalesParamsSchema.parse(req.params)

  const getSaleService = new GetSaleService(prisma)
  const { sale } = await getSaleService.execute({ id })

  return res.status(200).send({
    sale,
  })
}
