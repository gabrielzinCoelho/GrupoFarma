import { Prisma, PrismaClient, Salesperson } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'
import { InvalidCredentialsError } from '../errors/invalid-credentials-error'
import { compare } from 'bcryptjs'

interface AuthenticateServiceParams {
  email: string
  password: string
}

interface AuthenticateServiceResponse {
  salesperson: Salesperson
}

export class AuthenticateService {
  constructor(
    private prisma: PrismaClient<
      Prisma.PrismaClientOptions,
      never,
      DefaultArgs
    >,
  ) {}

  async execute({
    email,
    password,
  }: AuthenticateServiceParams): Promise<AuthenticateServiceResponse> {
    const salesperson = await this.prisma.salesperson.findUnique({
      where: {
        email,
      },
    })

    if (!salesperson) throw new InvalidCredentialsError()

    const doesPasswordMatches = await compare(
      password,
      salesperson.password_hash,
    )

    if (!doesPasswordMatches) throw new InvalidCredentialsError()

    return { salesperson }
  }
}
