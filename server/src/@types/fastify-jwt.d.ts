import '@fastify/jwt'

declare module '@fastify/jwt' {
  export interface FastifyJWT {
    payload: {
      name: string
      email: string
    }
    user: {
      sub: string
    }
  }
}
