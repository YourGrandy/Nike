import React from 'react'
import { star } from '../../assets/icons';

const PopularProductCard = ({ imgURL , name , price }) => {
  return (
    <div className='flex flex-col flex-1 w-full max-sm:w-full'>
      <img src={imgURL} alt="shoe image" 
      className='w-[280px] h-[280px] mx-auto cursor-pointer'
      />
      <div className='ml-[19px] mt-6 flex flex-col justify-start gap-2.5 items-start'>
        <div className='flex gap-x-2'>
            <img src={star} alt="star" width={24} height={24}/>
            <p className='text-xl leading-normal font-montserrat text-slate-gray'>(4.5)</p>
        </div>
        <h3 className='mt-2 text-2xl font-semibold cursor-pointer font-palanquin'>{name}</h3>
        <p className='text-lg font-semibold leading-normal font-montserrat text-coral-red'>{price}</p>
      </div>
    </div>
  )
}

export default PopularProductCard;
