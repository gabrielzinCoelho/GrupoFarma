import { PrismaClient, Prisma, PaymentMethod } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'

interface FetchPaymentMethodsServiceResponse {
  paymentMethods: PaymentMethod[]
}

export class FetchPaymentMethodsService {
  constructor(
    private prisma: PrismaClient<
      Prisma.PrismaClientOptions,
      never,
      DefaultArgs
    >,
  ) {}

  async execute(): Promise<FetchPaymentMethodsServiceResponse> {
    const paymentMethods = await this.prisma.paymentMethod.findMany()

    return { paymentMethods }
  }
}
