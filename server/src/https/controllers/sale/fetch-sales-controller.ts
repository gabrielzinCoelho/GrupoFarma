import { prisma } from '@/lib/prisma'
import { FetchSalesService } from '@/services/sale/fetch-sales-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export const fetchSales = async (req: FastifyRequest, res: FastifyReply) => {
  const fetchSalesParamsSchema = z.object({
    page: z.coerce.number().int().min(1),
  })

  const { page } = fetchSalesParamsSchema.parse(req.query)

  const fetchSalesService = new FetchSalesService(prisma)
  const { sales, total } = await fetchSalesService.execute({ page })

  return res.status(200).send({
    sales,
    total,
  })
}
