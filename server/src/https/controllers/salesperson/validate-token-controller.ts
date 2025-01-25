import { FastifyReply, FastifyRequest } from 'fastify'

export const validateToken = (req: FastifyRequest, res: FastifyReply) => {
  return res.status(200).send({
    isTokenValid: true,
  })
}
