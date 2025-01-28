import { prisma } from '@/lib/prisma'
import { DeleteSaleService } from '@/services/sale/delete-sale-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export const deleteSale = async (req: FastifyRequest, res: FastifyReply) => {
  const deleteSaleParamsSchema = z.object({
    id: z.string().uuid(),
  })

  const { id } = deleteSaleParamsSchema.parse(req.params)

  const deleteSaleService = new DeleteSaleService(prisma)
  const { sale } = await deleteSaleService.execute({
    id,
  })

  return res.status(200).send({
    sale,
  })
}
