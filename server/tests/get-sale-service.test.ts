import { PrismaClient } from '@prisma/client'
import { GetSaleService } from '../src/services/sale/get-sale-service'

jest.mock('@prisma/client')

describe('GetSaleService', () => {
  let prisma: PrismaClient
  let getSaleService: GetSaleService

  beforeEach(() => {
    prisma = new PrismaClient()
    getSaleService = new GetSaleService(prisma)
  })

  it('deve retornar uma venda com dados populados', async () => {
    const saleId = '1'
    const mockedSale = {
      id: '1',
      client: { name: 'Client Name' },
      paymentMethod: { method: 'Credit' },
      salesperson: { name: 'Salesperson Name' },
      coupon: { code: 'DISCOUNT10' },
      saleProducts: [
        { product: { name: 'Product A' }, quantity: 2, price: 50 },
      ],
    }

    prisma.sale.findUniqueOrThrow = jest.fn().mockResolvedValue(mockedSale)

    const response = await getSaleService.execute({ id: saleId })

    expect(response.sale).toEqual(mockedSale)
    expect(prisma.sale.findUniqueOrThrow).toHaveBeenCalledWith({
      where: { id: saleId },
      include: {
        client: true,
        paymentMethod: true,
        salesperson: true,
        coupon: true,
        saleProducts: {
          include: {
            product: true,
          },
        },
      },
    })
  })

  it('deve lançar erro se a venda não for encontrada', async () => {
    const saleId = '999'
    prisma.sale.findUniqueOrThrow = jest.fn().mockRejectedValue(new Error('Sale not found'))

    await expect(getSaleService.execute({ id: saleId })).rejects.toThrow('Sale not found')
  })
})
