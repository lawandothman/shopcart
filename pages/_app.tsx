import type { AppProps } from 'next/app'
import { Footer, Header } from 'components'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
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

export default MyApp
