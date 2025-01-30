import { verifyJwt } from '@/https/middlewares/verify-jwt'
import { FastifyInstance } from 'fastify'
import { fetchPaymentMethods } from './fetch-payment-methods-controller'

export const paymentMethodRoutes = async (app: FastifyInstance) => {
  app.get('/', { onRequest: verifyJwt }, fetchPaymentMethods)
}
