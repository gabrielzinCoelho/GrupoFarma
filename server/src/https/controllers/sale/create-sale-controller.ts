import { prisma } from '@/lib/prisma'
import { CreateSaleService } from '@/services/sale/create-sale-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export const createSale = async (req: FastifyRequest, res: FastifyReply) => {
  const createSaleBodySchema = z.object({
    client: z.string().uuid(),
    paymentMethod: z.string().uuid(),
    deliveryFee: z.number().multipleOf(0.01),
    coupon: z.string().uuid().optional(),
    products: z
      .array(
        z.object({
          id: z.string().uuid(),
          amount: z.number().int().min(1),
        }),
      )
      .nonempty(),
  })

  const { client, paymentMethod, deliveryFee, coupon, products } =
    createSaleBodySchema.parse(req.body)

  const salesperson = req.user.sub

  const createSaleService = new CreateSaleService(prisma)
  const { sale } = await createSaleService.execute({
    client,
    salesperson,
    paymentMethod,
    deliveryFee,
    coupon,
    products,
  })

  return res.status(201).send({
    sale,
  })
}
