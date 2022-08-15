import * as trpc from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/next'
import products from 'data/products'
import { z } from 'zod'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const appRouter = trpc
  .router()
  .query('products', {
    resolve() {
      return prisma.product.findMany()
    },
  })
  .query('product', {
    input: z.string(),
    resolve({ input }) {
      return prisma.product.findFirst({
        where: {
          id: input,
        },
      })
    },
  })

// export type definition of API
export type AppRouter = typeof appRouter

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
})
