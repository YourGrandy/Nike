import React from 'react'
import { star } from '../../assets/icons';
import { motion } from 'framer-motion';

const PopularProductCard = ({ imgURL , name , price, index }) => {
  return (
    <motion.div 
    className='flex flex-col flex-1 w-full max-sm:w-full'
    initial={{
      opacity: 0,
      y: +50,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      duration: 1,
      delay: index * 0.2
    }}
    viewport={{
      once: true
    }}
    >
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
    </motion.div>
  )
}

export default PopularProductCard;
