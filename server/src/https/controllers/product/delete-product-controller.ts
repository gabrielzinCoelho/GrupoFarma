import { prisma } from '@/lib/prisma'
import { DeleteProductService } from '@/services/product/delete-product-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export const deleteProduct = async (req: FastifyRequest, res: FastifyReply) => {
  const deleteProductParamsSchema = z.object({
    id: z.string().uuid(),
  })

  const { id } = deleteProductParamsSchema.parse(req.params)

  const deleteProductService = new DeleteProductService(prisma)

  const { product } = await deleteProductService.execute({
    id,
  })

  return res.status(201).send({
    product,
  })
}
