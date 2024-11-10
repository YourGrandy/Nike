import React from 'react'
import { delay, motion } from 'framer-motion'

const ServiceCard = ({ imgURL , label , subtext, index }) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: +40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.8,
        type: 'spring',
        delay: index * 0.2
      }
    }
  }
  return (
    <motion.div 
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
        <div className='flex items-center justify-center rounded-full w-11 h-11 bg-coral-red'>
          <img src={imgURL} alt={label} width={24} height={24} />
        </div>
        <h3
        className='mt-5 text-3xl font-bold leading-normal font-palanquin'
        >{label}</h3>
        <p
        className='mt-3 text-lg leading-normal break-words font-montserrat text-slate-gray'
        >{subtext}</p>
    </motion.div>
  )
}

export default ServiceCard
