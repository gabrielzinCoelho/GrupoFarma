import { prisma } from '@/lib/prisma'
import { FetchCategoriesService } from '@/services/category/fetch-categories-service'
import { FastifyReply, FastifyRequest } from 'fastify'

export const fetchCategories = async (
  req: FastifyRequest,
  res: FastifyReply,
) => {
  const fetchCategoriesService = new FetchCategoriesService(prisma)

  const { categories } = await fetchCategoriesService.execute()

  return res.status(200).send({
    categories,
  })
}
