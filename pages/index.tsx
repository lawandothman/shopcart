import type { NextPage } from 'next'
import { Product } from 'components/Product'
import products from 'data/products'

const Home: NextPage = () => {
  return (
    <div>
      <h1 className='py-10 text-5xl'>Latest Products</h1>
      <div className='flex flex-wrap gap-8'>
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Home
