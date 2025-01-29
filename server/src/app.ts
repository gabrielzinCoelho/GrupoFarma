import fastify from 'fastify'
import { ZodError } from 'zod'
import { env } from './env'
import { salespersonRoutes } from './https/controllers/salesperson/routes'
import fastifyJwt from '@fastify/jwt'
import cors from '@fastify/cors'
import { productsRoutes } from './https/controllers/product/routes'
import { salesRoutes } from './https/controllers/sale/routes'
import { categoryRoutes } from './https/controllers/category/routes'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  sign: {
    algorithm: 'HS256',
    expiresIn: '1h',
  },
})

app.register(cors)

app.register(salespersonRoutes)
app.register(productsRoutes, {
  prefix: '/products',
})
app.register(salesRoutes, {
  prefix: '/sales',
})
app.register(categoryRoutes, {
  prefix: 'categories',
})

app.setErrorHandler((err, req, res) => {
  if (err instanceof ZodError) {
    return res.status(400).send({
      message: 'Validation Error',
      issues: err.format(),
    })
  }

  if (env.NODE_ENV !== 'production') console.log(err)

  return res.status(500).send({
    message: 'Internal Server Error.',
    err: err.message,
  })
})
