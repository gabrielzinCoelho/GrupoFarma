import { FastifyInstance } from 'fastify'
import { authenticate } from './authenticate-controller'

export const salespersonRoutes = async (app: FastifyInstance) => {
  app.post('/sessions', authenticate)
}
