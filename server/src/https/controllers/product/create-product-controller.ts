import { prisma } from '@/lib/prisma'
import { CreateProductService } from '@/services/product/create-product-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export const createProduct = async (req: FastifyRequest, res: FastifyReply) => {
  const createProductBodySchema = z.object({
    anvisaCode: z.string(),
    name: z.string(),
    price: z.number().multipleOf(0.01),
    howToUse: z.string(),
    sideEffects: z.string(),
    categoryId: z.string(),
  })

  const { anvisaCode, name, price, howToUse, sideEffects, categoryId } =
    createProductBodySchema.parse(req.body)

  const createProductService = new CreateProductService(prisma)

  const { product } = await createProductService.execute({
    anvisaCode,
    name,
    price,
    howToUse,
    sideEffects,
    categoryId,
  })

  return res.status(201).send({
    product,
  })
}
