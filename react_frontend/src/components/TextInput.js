// library
import React from 'react'

const TextInput = ({ value, placeholder, name, onChange}) => {




  return (
    <div className='w-full mx-auto'>
        <label className='label-dft' htmlFor={name}>{name}</label>
        <input
        className='form-elt-dft input-dft'
        type='text'
        name={name}
        value={value}
        onChange={onChange}
        />
    </div>
  )
}

export default TextInput