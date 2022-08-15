import type { NextPage } from 'next'
import { Product } from 'components/Product'
import { trpc } from 'utils/trpc'

const Home: NextPage = () => {
  const { data: products } = trpc.useQuery(['products'])

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
