import {
  TiStarOutline,
  TiStarFullOutline,
  TiStarHalfOutline,
} from 'react-icons/ti'

interface RatingProps {
  value: number
  text: string
}
export const Rating: React.FC<RatingProps> = ({ value, text }) => {
  return (
    <div className='flex items-center'>
      {value >= 1 ? (
        <TiStarFullOutline className='text-yellow-500' />
      ) : value >= 0.5 ? (
        <TiStarHalfOutline className='text-yellow-500' />
      ) : (
        <TiStarOutline />
      )}
      {value >= 2 ? (
        <TiStarFullOutline className='text-yellow-500' />
      ) : value >= 1.5 ? (
        <TiStarHalfOutline className='text-yellow-500' />
      ) : (
        <TiStarOutline />
      )}
      {value >= 3 ? (
        <TiStarFullOutline className='text-yellow-500' />
      ) : value >= 2.5 ? (
        <TiStarHalfOutline className='text-yellow-500' />
      ) : (
        <TiStarOutline />
      )}
      {value >= 4 ? (
        <TiStarFullOutline className='text-yellow-500' />
      ) : value >= 3.5 ? (
        <TiStarHalfOutline className='text-yellow-500' />
      ) : (
        <TiStarOutline />
      )}
      {value >= 5 ? (
        <TiStarFullOutline className='text-yellow-500' />
      ) : value >= 4.5 ? (
        <TiStarHalfOutline className='text-yellow-500' />
      ) : (
        <TiStarOutline />
      )}
      <span className='ml-2'>{text}</span>
    </div>
  )
}
