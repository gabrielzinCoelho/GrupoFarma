import { prisma } from '@/lib/prisma'
import { CreateCategoryService } from '@/services/category/create-category-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export const createCategory = async (req: FastifyRequest, res: FastifyReply) => {
  const createCategoryBodySchema = z.object({
    id: z.number(),
    name: z.string(),
  })

  const { id, name } =
    createCategoryBodySchema.parse(req.body)

  const createCategoryService = new CreateCategoryService(prisma)

  const { category } = await createCategoryService.execute({
    id,
    name,
  })

  return res.status(201).send({
    category,
  })
}
