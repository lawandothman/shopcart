import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Loader, Rating } from 'components'
import { trpc } from 'utils/trpc'

const Product: NextPage = () => {
  const id = useRouter().query.id as string
  const { data: product, isLoading } = trpc.useQuery(['products.getById', id])

  if (isLoading) {
    return (
      <div className='flex items-center justify-center  h-[80vh]'>
        <Loader />
      </div>
    )
  }

  if (product) {
    return (
      <div className='flex items-center justify-center'>
        <div className='flex justify-center gap-8 mt-20'>
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={500}
            className='rounded-lg'
          />
          <div className='flex flex-col max-w-md gap-8'>
            <h1 className='text-4xl '>{product.name}</h1>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
            <p className='text-xl'>${product.price}</p>
            <p>{product.description}</p>
            <p
              className={` text-2xl ${
                product.countInStock > 0 ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
            </p>

            <button
              disabled={product.countInStock === 0}
              className='py-4 mt-8 text-white uppercase rounded-lg bg-zinc-800 disabled:bg-zinc-400'
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default Product
