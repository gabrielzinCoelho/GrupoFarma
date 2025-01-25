import { prisma } from '@/lib/prisma'
import { InvalidCredentialsError } from '@/services/errors/invalid-credentials-error'
import { AuthenticateService } from '@/services/salesperson/authenticate-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export const authenticate = async (req: FastifyRequest, res: FastifyReply) => {
  const authBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(5),
  })

  const { email, password } = await authBodySchema.parse(req.body)

  try {
    const authService = new AuthenticateService(prisma)
    const { salesperson } = await authService.execute({ email, password })

    const token = await res.jwtSign(
      {
        name: salesperson.name,
        email: salesperson.email,
      },
      {
        sign: {
          sub: salesperson.id,
        },
      },
    )

    return res.status(200).send({
      token,
    })
  } catch (err) {
    if (err instanceof InvalidCredentialsError)
      return res.status(400).send({
        message: 'Invalid Credentials!',
      })

    throw err
  }
}
