import { createRouter } from './context'
import { z } from 'zod'

export const productsRouter = createRouter()
  .query('getAll', {
    async resolve({ ctx }) {
      return await ctx.prisma.product.findMany()
    },
  })
  .query('getById', {
    input: z.string(),
    async resolve({ ctx, input }) {
      return await ctx.prisma.product.findUnique({
        where: {
          id: input,
        },
      })
    },
  })
