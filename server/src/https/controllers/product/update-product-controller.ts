import { prisma } from '@/lib/prisma'
import { UpdateProductService } from '@/services/product/update-product-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export const updateProduct = async (req: FastifyRequest, res: FastifyReply) => {
  const updateProductBodySchema = z.object({
    anvisaCode: z.string(),
    name: z.string(),
    price: z.number().multipleOf(0.01),
    howToUse: z.string(),
    sideEffects: z.string(),
    categoryId: z.string(),
  })

  const updateProducParamsSchema = z.object({
    id: z.string().uuid(),
  })

  const { anvisaCode, name, price, howToUse, sideEffects, categoryId } =
    updateProductBodySchema.parse(req.body)

  const { id } = updateProducParamsSchema.parse(req.params)

  const updateProductService = new UpdateProductService(prisma)

  const { product } = await updateProductService.execute({
    id,
    anvisaCode,
    name,
    price,
    howToUse,
    sideEffects,
    categoryId,
  })

  return res.status(200).send({
    product,
  })
}
