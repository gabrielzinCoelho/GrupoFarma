import { FastifyInstance } from 'fastify'
import { authenticate } from './authenticate-controller'
import { validateToken } from './validate-token-controller'
import { verifyJwt } from '@/https/middlewares/verify-jwt'

export const salespersonRoutes = async (app: FastifyInstance) => {
  app.post('/sessions', authenticate)
  app.get('/sessions/validate-token', { onRequest: [verifyJwt] }, validateToken)
}
