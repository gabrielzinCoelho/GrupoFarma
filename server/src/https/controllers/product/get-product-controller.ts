import { prisma } from '@/lib/prisma'
import { GetProductsService } from '@/services/product/get-product-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export const getProduct = async (req: FastifyRequest, res: FastifyReply) => {
  const getProductParamsSchema = z.object({
    id: z.string(),
  })

  const { id } = getProductParamsSchema.parse(req.params)

  const getProductService = new GetProductsService(prisma)

  const { product } = await getProductService.execute({
    id,
  })

  return res.status(200).send({
    product,
  })
}
