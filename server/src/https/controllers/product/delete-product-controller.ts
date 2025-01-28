import { prisma } from '@/lib/prisma'
import { CheckIfProductIsActiveService } from '@/services/product/check-if-product-is-active-service'
import { DeleteProductService } from '@/services/product/delete-product-service'
import { UpdateProductService } from '@/services/product/update-product-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export const deleteProduct = async (req: FastifyRequest, res: FastifyReply) => {
  const deleteProductParamsSchema = z.object({
    id: z.string().uuid(),
  })

  const { id } = deleteProductParamsSchema.parse(req.params)

  const checkProductService = new CheckIfProductIsActiveService(prisma)
  const updateProductService = new UpdateProductService(
    prisma,
    checkProductService,
  )
  const deleteProductService = new DeleteProductService(
    prisma,
    checkProductService,
    updateProductService,
  )

  const { product } = await deleteProductService.execute({
    id,
  })

  return res.status(200).send({
    product,
  })
}
