import Image from 'next/image'
import Link from 'next/link'
import { IProduct } from 'types'

interface ProductProps {
  product: IProduct
}

export const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className='max-w-sm border border-gray-200 rounded-lg shadow-md '>
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
				<p className='text-base text-gray-700'>{product.rating} from {product.numReviews} reviews</p>
				<h5>${product.price}</h5>
      </div>
    </div>
  )
}
