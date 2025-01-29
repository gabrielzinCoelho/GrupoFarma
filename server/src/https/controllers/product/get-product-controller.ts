import { prisma } from '@/lib/prisma'
import { CheckIfProductIsActiveService } from '@/services/product/check-if-product-is-active-service'
import { GetProductsService } from '@/services/product/get-product-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export const getProduct = async (req: FastifyRequest, res: FastifyReply) => {
  const getProductParamsSchema = z.object({
    id: z.string().uuid(),
  })

  const { id } = getProductParamsSchema.parse(req.params)

  const checkProductService = new CheckIfProductIsActiveService(prisma)
  const getProductService = new GetProductsService(prisma, checkProductService)

  const { product } = await getProductService.execute({
    id,
  })

  return res.status(200).send({
    product: {
      ...product,
      price: product.price.toNumber(),
    },
  })
}
