import React from 'react';
import { reviews } from './../../constants';
import ReviewCard from '../../components/reviewCard/ReviewCard';

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='text-4xl font-bold text-center font-palanquin'>
        What our ? 
        <span className='text-coral-red'> Customers </span>
        Say ?
      </h3>
      <p className='max-w-lg m-auto mt-4 text-center info-text'>
        At Nike, we pride ourselves on delivering exceptional quality and service. Below are some of the testimonials from people who have experienced the comfort, style, and durability of our shoes.
      </p>
      <div className='flex items-center flex-1 mt-24 justify-evenly max-lg:flex-col gap-14'>
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>

    </section>
  )
}

export default CustomerReviews
