import { verifyJwt } from '@/https/middlewares/verify-jwt'
import { FastifyInstance } from 'fastify'
import { createProduct } from './create-product-controller'
import { fetchProducts } from './fetch-products-controller'
import { getProduct } from './get-product-controller'
import { deleteProduct } from './delete-product-controller'
import { updateProduct } from './update-product-controller'

export const productsRoutes = async (app: FastifyInstance) => {
  app.addHook('onRequest', verifyJwt)

  app.post('/', createProduct)
  app.get('/', fetchProducts)
  app.get('/:id', getProduct)
  app.delete('/:id', deleteProduct)
  app.put('/:id', updateProduct)
}
