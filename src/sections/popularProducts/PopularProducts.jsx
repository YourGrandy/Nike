import { products } from './../../constants';
import PopularProductCard from '../../components/popularProductCard/PopularProductCard';
import { motion } from 'framer-motion';

const PopularProducts = () => {
  return (
    <section 
    id='products'
    className='max-container max-sm:mt-12'
    >
      <motion.div 
      className='flex flex-col justify-start gap-5 pl-5 origin-bottom'
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
      }}
      viewport={{
        once: true
      }}
      >
        <h2 className='text-4xl font-bold font-palanquin'>Our <span className='text-coral-red'>Popular</span> Products</h2>
        <p className='mt-2 lg:max-w-lg font-montserrat text-slate-gray'>Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
      </motion.div>
      <motion.div layout className='grid mt-16 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-col-1 max-sm:gap-4 gap-14'>
        {
          products.map((product, index) => (
            <PopularProductCard 
            key={index} 
            {...product}
            index={index}
            />
          ))
        }
      </motion.div>
    </section>
  )
}

export default PopularProducts
