import * as trpc from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/next'
import { z } from 'zod'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const appRouter = trpc
  .router()
  .query('products', {
    async resolve() {
      return await prisma.product.findMany()
    },
  })
  .query('product', {
    input: z.string(),
    async resolve({ input }) {
      return await prisma.product.findUnique({
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
