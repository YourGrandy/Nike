import React from 'react'

const Button = ({label , imgURL , backGroundColor , textColor , borderColor, fullWidth }) => {
  return (
    <button 
        className={`flex items-center justify-center gap-2 py-4 text-lg leading-none ${textColor ? textColor : 'text-white'} border rounded-full px-7 font-montserrat ${fullWidth && 'w-full'} ${backGroundColor ? backGroundColor : 'bg-coral-red'} ${borderColor ? borderColor : 'border-coral-red'}`}
    >
        {label}
        {imgURL &&<img 
              src={imgURL} 
              alt={label} 
              className='w-5 h-5 ml-2 rounded-full'
          />}
    </button>
  )
}

export default Button
