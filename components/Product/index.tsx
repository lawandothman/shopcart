import { Rating } from 'components/Rating'
import Image from 'next/image'
import Link from 'next/link'
import { IProduct } from 'types'

interface ProductProps {
  product: IProduct
}

export const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <Link href={`/product/${product._id}`}>
      <div className='max-w-sm border border-gray-200 rounded-lg shadow-md cursor-pointer'>
        <Image
          className='rounded-t-lg'
          src={product.image}
          alt={product.name}
          width={600}
          height={600}
        />
        <div className='p-5'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 '>
            {product.name}
          </h5>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
          <h5>${product.price}</h5>
        </div>
      </div>
    </Link>
  )
}
