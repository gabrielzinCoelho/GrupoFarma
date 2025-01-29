import { verifyJwt } from '@/https/middlewares/verify-jwt'
import { FastifyInstance } from 'fastify'
import { fetchCategories } from './fetch-categories-controller'

export const categoryRoutes = async (app: FastifyInstance) => {
  app.get('/', { onRequest: verifyJwt }, fetchCategories)
}
