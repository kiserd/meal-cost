import React from 'react'

const IngredientCard = ({ ingredient }) => {
  return (
    <div className='uppercase bg-custom-card shadow-md max-w-md rounded-md text-custom-text-primary font-bold'>
      <div className='p-2'>
        <div className='text-custom-text-primary text-2xl'>
            {ingredient.name}
        </div>
        <div className='text-custom-text-secondary text-xs'>
            {ingredient.category}
        </div>
        <div className='text-custom-text-secondary text-xs'>
            ${ingredient.price} / {ingredient.unit}
        </div>
        <div className='text-custom-text-secondary text-xs'>
            {ingredient.kcal} kcal / {ingredient.unit}
        </div>
      </div>
    </div>
  )
}

export default IngredientCard