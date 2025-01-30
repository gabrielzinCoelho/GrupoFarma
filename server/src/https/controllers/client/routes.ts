import { verifyJwt } from '@/https/middlewares/verify-jwt'
import { FastifyInstance } from 'fastify'
import { fetchClients } from './fetch-clients-controller'

export const clientRoutes = async (app: FastifyInstance) => {
  app.get('/', { onRequest: verifyJwt }, fetchClients)
}
