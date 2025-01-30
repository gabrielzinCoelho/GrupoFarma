import { PrismaClient, Sale, Prisma } from '@prisma/client';
import { CreateSaleService, CreateSaleServiceParams, CreateSaleServiceResponse } from '../src/services/sale/create-sale-service';

// Mock PrismaClient
jest.mock('@prisma/client', () => ({
  PrismaClient: jest.fn().mockImplementation(() => ({
    product: {
      findUniqueOrThrow: jest.fn(),
    },
    coupon: {
      findUniqueOrThrow: jest.fn(),
    },
    sale: {
      create: jest.fn(),
    },
  })),
}));

describe('CreateSaleService', () => {
  let prisma: PrismaClient;
  let createSaleService: CreateSaleService;

  beforeEach(() => {
    prisma = new PrismaClient();
    createSaleService = new CreateSaleService(prisma);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a sale successfully', async () => {
    // Arrange
    const params: CreateSaleServiceParams = {
      client: 'client-id',
      salesperson: 'salesperson-id',
      paymentMethod: 'payment-method-id',
      deliveryFee: 10,
      products: [
        { id: 'product-id-1', amount: 2 },
        { id: 'product-id-2', amount: 1 },
      ],
    };

    // Mock product responses
    (prisma.product.findUniqueOrThrow as jest.Mock).mockImplementation((args) => {
      if (args.where.id === 'product-id-1') {
        return Promise.resolve({ id: 'product-id-1', price: 20, is_active: true });
      } else if (args.where.id === 'product-id-2') {
        return Promise.resolve({ id: 'product-id-2', price: 30, is_active: true });
      }
      throw new Error('Product not found');
    });

    // Mock coupon response
    (prisma.coupon.findUniqueOrThrow as jest.Mock).mockResolvedValue({
      id: 'coupon-id',
      discount_percentage: 10,
    });

    // Mock sale creation
    const mockSale: Sale = {
      id: 'sale-id',
      client_id: params.client,
      salesperson_id: params.salesperson,
      payment_method_id: params.paymentMethod,
      total_price: new Prisma.Decimal(68), // (20 * 2 + 30 * 1 + 10) * 0.9 = 68
      coupon_id: 'coupon-id',
      delivery_fee: new Prisma.Decimal(params.deliveryFee),
      datetime: new Date(),
    };
    (prisma.sale.create as jest.Mock).mockResolvedValue(mockSale);

    // Act
    const result: CreateSaleServiceResponse = await createSaleService.execute(params);

    // Assert
    expect(prisma.product.findUniqueOrThrow).toHaveBeenCalledTimes(2);
    expect(prisma.coupon.findUniqueOrThrow).toHaveBeenCalledTimes(1);
    expect(prisma.sale.create).toHaveBeenCalledWith({
      data: {
        client_id: params.client,
        payment_method_id: params.paymentMethod,
        salesperson_id: params.salesperson,
        total_price: 68,
        coupon_id: 'coupon-id',
        delivery_fee: params.deliveryFee,
        saleProducts: {
          createMany: {
            data: [
              { amount: 2, price: 20, product_id: 'product-id-1' },
              { amount: 1, price: 30, product_id: 'product-id-2' },
            ],
          },
        },
      },
    });
    expect(result.sale).toEqual(mockSale);
  });

  it('should throw an error if a product is not found or inactive', async () => {
    // Arrange
    const params: CreateSaleServiceParams = {
      client: 'client-id',
      salesperson: 'salesperson-id',
      paymentMethod: 'payment-method-id',
      deliveryFee: 10,
      products: [{ id: 'invalid-product-id', amount: 1 }],
    };

    // Mock product response to throw an error
    (prisma.product.findUniqueOrThrow as jest.Mock).mockRejectedValue(new Error('Product not found'));

    // Act & Assert
    await expect(createSaleService.execute(params)).rejects.toThrow('Product not found');
  });
});