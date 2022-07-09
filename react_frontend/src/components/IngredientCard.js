import React from 'react'

const IngredientCard = ({ ingredient }) => {
  return (
    <div className='bg-custom-card shadow-md max-w-md rounded-md text-custom-text-primary'>
        <div className='text-custom-text-primary text-2xl'>
            {ingredient.name}
        </div>
        <div className='text-custom-text-secondary text-lg'>
            {ingredient.category}
        </div>
    </div>
  )
}

export default IngredientCard