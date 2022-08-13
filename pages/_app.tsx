import type { AppProps } from 'next/app'
import { Footer, Header } from 'components'

import '../styles/globals.css'
import { withTRPC } from '@trpc/next'
import { AppRouter } from './api/trpc/[trpc]'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <main className='container min-h-[80vh] mx-auto my-4'>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    return ''
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  if (process.env.RENDER_INTERNAL_HOSTNAME) {
    return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`
  }

  return `http://localhost:${process.env.PORT ?? 3000}`
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    return {
      url: `${getBaseUrl()}/api/trpc`,
      /**
       * @link https://react-query-v3.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    }
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: true,
})(MyApp)
