// src/server/router/index.ts
import { createRouter } from './context'
import superjson from 'superjson'

import { productsRouter } from './products'

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('products.', productsRouter)

// export type definition of API
export type AppRouter = typeof appRouter
