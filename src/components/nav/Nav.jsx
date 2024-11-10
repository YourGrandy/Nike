import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { headerLogo } from './../../assets/images';
import { hamburger } from './../../assets/icons';
import { RxCross2 } from "react-icons/rx";

import { navLinks } from '../../constants';
const Nav = () => {
  const [open, setOpen] = useState(false);

  const popupVariants = {
    initial: {
      y: "-100%",
      opacity: 0
    },
    animate: {
      y:0,
      opacity: 1,
    },
    exit: {
      y: "-100%",
      opacity: 0
    }
  }
  return (
    <header className='absolute z-50 w-full py-8 padding-x'>
      <nav className='relative flex items-center justify-between max-container'>
        <a href="/">
          <img src={headerLogo} alt="Nike logo" width={130} height={29}/>
        </a>
        <ul className='flex items-center justify-center flex-1 gap-16 max-lg:hidden'>
          {
            navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className='text-lg leading-normal font-montserrat text-slate-gray'>
                  {item.label}
                </a>
              </li>
            ))
          }
        </ul>
        <div className='block max-lg: lg:hidden'>
        <AnimatePresence>
            {
              open ? 
              (
                  <motion.div 
                  variants={popupVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  key="popup"
                  transition={{
                    type: "spring",
                    duration: 0.4
                  }}
                  className='min-w-[200px] absolute flex flex-col px-10 py-6 rounded-lg shadow-lg bg-coral-red top-1 right-1 items-center'>
                    <RxCross2 size={25} 
                    onClick={() => setOpen(curr => !curr)}
                    className='self-end mb-3 cursor-pointer'/>
                    <ul className="flex flex-col gap-5">
                      {
                        navLinks.map((link, index) => (
                          <li><a 
                          className='text-lg font-medium leading-6 duration-300 text-black/70 hover:text-black'
                          href={link.href}>{link.label}</a></li>
                        ))
                      }
                    </ul>
                  </motion.div>
              ) 
              :
              (<img src={hamburger} 
                alt="hamburger" 
                width={25} 
                height={25} 
                onClick={() => setOpen(curr => !curr)}
                className='cursor-pointer'
                key="hamburger"
              />)
            }
            </AnimatePresence>
        </div>
      </nav>
    </header>
  )
}

export default Nav
