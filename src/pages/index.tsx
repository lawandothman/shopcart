import type { NextPage } from 'next'
import { Loader, Product } from 'components'
import { trpc } from 'utils/trpc'

const Home: NextPage = () => {
  const { data: products, isLoading } = trpc.useQuery(['products.getAll'])

  if (isLoading) {
    return (
      <div className='flex items-center justify-center  h-[80vh]'>
        <Loader />
      </div>
    )
  }

  return (
    <div>
      <h1 className='py-10 text-5xl'>Latest Products</h1>
      <div className='flex flex-wrap gap-8'>
        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Home
