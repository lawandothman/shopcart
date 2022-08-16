// src/server/router/index.ts
import { createRouter } from './context'
import superjson from 'superjson'

import { protectedExampleRouter } from './protected-example-router'
import { productsRouter } from './products'

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('products.', productsRouter)
  .merge('question.', protectedExampleRouter)

// export type definition of API
export type AppRouter = typeof appRouter
