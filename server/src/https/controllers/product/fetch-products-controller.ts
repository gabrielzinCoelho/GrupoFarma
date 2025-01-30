import { prisma } from '@/lib/prisma'
import { FetchProductsService } from '@/services/product/fetch-products-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export const fetchProducts = async (req: FastifyRequest, res: FastifyReply) => {
  const fetchProducstParamsSchema = z.object({
    page: z.coerce.number().int().min(1).optional(),
    onlyActives: z.enum(['true', 'false']).default('true'),
  })

  const { page, onlyActives } = fetchProducstParamsSchema.parse(req.query)

  const fetchProductService = new FetchProductsService(prisma)

  const { products, total } = await fetchProductService.execute({
    page,
    onlyActives: onlyActives === 'true',
  })

  return res.status(200).send({
    products,
    total,
  })
}
