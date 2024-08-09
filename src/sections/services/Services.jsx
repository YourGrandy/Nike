import React from 'react'
import { services } from '../../constants';
import ServiceCard from '../../components/ServiceCard/ServiceCard';

const Services = () => {
  return (
    <section className='flex flex-wrap justify-center max-container gap-9'>
      {services.map((service, index) => (
        <ServiceCard key={index} {...service}/>
      ))}
    </section>
  )
}

export default Services
