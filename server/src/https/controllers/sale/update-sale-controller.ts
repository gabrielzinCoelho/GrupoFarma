import { prisma } from '@/lib/prisma'
import { UpdateSaleService } from '@/services/sale/update-sale-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export const updateSale = async (req: FastifyRequest, res: FastifyReply) => {
  const updateSaleBodySchema = z.object({
    client: z.string().uuid(),
    paymentMethod: z.string().uuid(),
    deliveryFee: z.number().multipleOf(0.01),
    coupon: z.string().uuid().optional(),
    products: z.array(
      z.object({
        id: z.string().uuid(),
        amount: z.number().int().min(1),
        price: z.number().multipleOf(0.01),
      }),
    ),
  })

  const updateSaleParamsSchema = z.object({
    id: z.string().uuid(),
  })

  const { client, paymentMethod, deliveryFee, coupon, products } =
    updateSaleBodySchema.parse(req.body)

  const { id } = updateSaleParamsSchema.parse(req.params)

  const salesperson = req.user.sub

  const updateSaleService = new UpdateSaleService(prisma)
  const { sale } = await updateSaleService.execute({
    id,
    client,
    salesperson,
    paymentMethod,
    deliveryFee,
    coupon,
    products,
  })

  return res.status(200).send({
    sale,
  })
}
