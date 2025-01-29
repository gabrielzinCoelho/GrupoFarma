import { prisma } from '@/lib/prisma'
import { CheckIfProductIsActiveService } from '@/services/product/check-if-product-is-active-service'
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
    category: z.string(),
  })

  const updateProducParamsSchema = z.object({
    id: z.string().uuid(),
  })

  const { anvisaCode, name, price, howToUse, sideEffects, category } =
    updateProductBodySchema.parse(req.body)

  const { id } = updateProducParamsSchema.parse(req.params)

  const checkProductService = new CheckIfProductIsActiveService(prisma)
  const updateProductService = new UpdateProductService(
    prisma,
    checkProductService,
  )

  const { product } = await updateProductService.execute({
    id,
    anvisaCode,
    name,
    price,
    howToUse,
    sideEffects,
    category,
  })

  return res.status(200).send({
    product,
  })
}
