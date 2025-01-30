import { CreateProductService } from '../src/services/product/create-product-service';
import { PrismaClient } from '@prisma/client';
import { jest } from '@jest/globals'; 

// Mock do PrismaClient para evitar chamadas ao banco de dados real
const prismaMock = {
  product: {
    create: jest.fn(), // Cria um mock de função corretamente
  },
} as unknown as PrismaClient;

describe('CreateProductService', () => {
  let createProductService: CreateProductService;

  beforeEach(() => {
    jest.clearAllMocks(); // Reseta os mocks antes de cada teste
    createProductService = new CreateProductService(prismaMock);
  });

  test('Deve criar um produto corretamente', async () => {
  const mockProduct = {
    id: '1',
    anvisa_code: '123456',
    name: 'Paracetamol',
    price: 10.5,
    how_to_use: 'Tomar 1 comprimido a cada 8 horas',
    side_effects: 'Pode causar sonolência',
    category_id: 'c1',
  };

  prismaMock.product.create = jest.fn().mockResolvedValue(mockProduct); // Corrige o mock

  const result = await createProductService.execute({
    anvisaCode: '123456',
    name: 'Paracetamol',
    price: 10.5,
    howToUse: 'Tomar 1 comprimido a cada 8 horas',
    sideEffects: 'Pode causar sonolência',
    category: 'c1',
  });

  expect(result.product).toEqual(mockProduct);
  expect(prismaMock.product.create).toHaveBeenCalledTimes(1);
  expect(prismaMock.product.create).toHaveBeenCalledWith({
    data: {
      anvisa_code: '123456',
      name: 'Paracetamol',
      price: 10.5,
      how_to_use: 'Tomar 1 comprimido a cada 8 horas',
      side_effects: 'Pode causar sonolência',
      category_id: 'c1',
    },
  });
});

  test('Deve lançar um erro se o nome do produto for inválido', async () => {
    await expect(
      createProductService.execute({
        anvisaCode: '123456',
        name: '',
        price: 10.5,
        howToUse: 'Tomar 1 comprimido a cada 8 horas',
        sideEffects: 'Pode causar sonolência',
        category: 'c1',
      })
    ).rejects.toThrow();
  });
});
