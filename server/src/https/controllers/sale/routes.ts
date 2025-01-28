import { verifyJwt } from '@/https/middlewares/verify-jwt'
import { FastifyInstance } from 'fastify'
import { fetchSales } from './fetch-sales-controller'
import { getSale } from './get-sale-controller'
import { createSale } from './create-sale-controller'
import { deleteSale } from './delete-sale-controller'
import { updateSale } from './update-sale-controller'

export const salesRoutes = async (app: FastifyInstance) => {
  app.addHook('onRequest', verifyJwt)

  app.post('/', createSale)
  app.get('/', fetchSales)
  app.get('/:id', getSale)
  app.delete('/:id', deleteSale)
  app.put('/:id', updateSale)
}
