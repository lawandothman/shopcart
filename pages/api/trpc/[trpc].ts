import * as trpc from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/next'
import products from 'data/products'
import { z } from 'zod'

export const appRouter = trpc
  .router()
  .query('products', {
    resolve() {
      return products
    },
  })
  .query('product', {
    input: z.string(),
    resolve({ input }) {
      return products.find((p) => p._id === input)
    },
  })

// export type definition of API
export type AppRouter = typeof appRouter

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
})
