// library
import React from 'react'
import { Link } from 'react-router-dom';

export const Navlink = ({ route, name }) => {
  return (
    <div className='px-2 inline text-2xl text-custom-text-primary hover:bg-custom-card'>
        <Link to={route}>{name}</Link>
    </div>
  )
}

export default Navlink