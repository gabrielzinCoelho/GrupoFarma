import { prisma } from '@/lib/prisma'
import { FetchPaymentMethodsService } from '@/services/paymentMethod/fetch-payment-methods-service'
import { FastifyReply, FastifyRequest } from 'fastify'

export const fetchPaymentMethods = async (
  req: FastifyRequest,
  res: FastifyReply,
) => {
  const fetchPaymentMethodsService = new FetchPaymentMethodsService(prisma)

  const { paymentMethods } = await fetchPaymentMethodsService.execute()

  return res.status(200).send({
    paymentMethods,
  })
}
