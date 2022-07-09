import React from 'react'

const Button = ({ text }) => {
  return (
    <button className='py-1 px-3 border-2 rounded-xl bg-custom-purple-primary border-custom-purple-primary'>
        {text}
    </button>
  )
}

export default Button