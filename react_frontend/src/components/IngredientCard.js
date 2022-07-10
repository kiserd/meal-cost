// library
import React from 'react'
// component
import Button from './Button'

const IngredientCard = ({ ingredient }) => {
  return (
    <div className='max-w-md p-2 flex flex-row bg-custom-card shadow-md rounded'>
      <div className='basis-3/4 flex flex-col uppercase'>
          <div className='text-custom-text-primary text-2xl font-bold'>
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
      <div className='basis-1/4 flex flex-col content-end'>
        <div className='basis-1/2'>
          <Button text='Update' />
        </div>
        <div className='basis-1/2'>
          <Button text='Delete' />
        </div>
      </div>
    </div>
  )
}

export default IngredientCard