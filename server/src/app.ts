import fastify from 'fastify'
import { ZodError } from 'zod'
import { env } from './env'
import { salespersonRoutes } from './https/controllers/salesperson/routes'
import fastifyJwt from '@fastify/jwt'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  sign: {
    algorithm: 'HS256',
    expiresIn: '1h',
  },
})

app.register(salespersonRoutes)

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
  })
})
