import React from 'react';
import { offer } from './../../assets/images';
import { arrowRight } from './../../assets/icons'
import Button from './../../components/button/Button'

const SpecialOffers = () => {
  return (
    <section
    className='flex flex-wrap items-center gap-10 max-xl:flex-col-reverse max-container'
    >
      <div className='flex-1'>
        <img src={offer} alt="offer" width={773} height={687} className='object-contain w-full'/>
      </div>
      <div className="flex flex-col flex-1 ">
        <h2 className='mt-10 text-4xl font-bold capitalize font-palanquin lg:max-w-lg'>
          <span className='inline-block mt-3 text-coral-red'>
            Special
          </span> Offer
        </h2>
          <p className='mt-4 lg:max-w-lg info-text'>
          Step into style and comfort with our exclusive shoe sale! For a limited time, enjoy incredible discounts of up to 50% off on our best-selling footwear. Whether you're looking for chic sneakers, elegant heels, or durable boots, we have something for everyone.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">Don’t miss out on this amazing deal. Upgrade your shoe collection with top-notch styles that offer both fashion and comfort. <span className='font-bold text-coral-red'>Shop now and save big!</span></p>
          <div className="flex flex-wrap gap-4 mt-11 max-sm:mx-auto">
            <Button imgURL={arrowRight} label='Shop now'/>
            <Button label='Learn more'
            backGroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
            />
          </div>
      </div>
    </section>
  )
}

export default SpecialOffers
