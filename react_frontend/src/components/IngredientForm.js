// library
import axios from 'axios';
import { useState, useEffect } from 'react'

// component
import Button from './Button'
import TextInput from './TextInput'

const IngredientForm = () => {

    const [payload, setPayload] = useState({'name': '', 'category': '', 'price': ''});

    const addIngredient = async (e) => {
        // prevent page reload
        e.preventDefault();
        if (payload.name !== '' && payload.category !== '') {
            // send POST request to backend
            let res = await axios.post('http://localhost:5000/api/ingredients', payload)
            console.log(res)
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPayload({...payload, [name]: value});
    }


  return (
    <div className='w-full max-w-sm h-full p-2 flex flex-col shadow-md border-default border-custom-card bg-custom-card'>
        <form onSubmit={addIngredient}>
            <div className='mb-4'>
                <TextInput name='name' value={payload.name} onChange={handleInputChange} />
            </div>
            <div className='mb-4'>
                <TextInput name='category' value={payload.category} onChange={handleInputChange} />
            </div>
            <div className='mb-4 flex flex-row'>
                <div className='w-full md:w-1/2 mr-2'>
                    <label className='label-dft' htmlFor='measure'>units</label>
                    <select className='form-elt-dft select-dft' name='measure'>
                        <option>lb</option>
                        <option>oz</option>
                        <option>g</option>
                    </select>
                </div>
                <div className='w-full md:w-1/2 ml-2'>
                    <TextInput name='price' value={payload.price} onChange={handleInputChange} />
                </div>
            </div>
            {/* <div className='mb-4'>
                <TextInput name='Price' />
            </div>
            <div className='mb-4'>
                <TextInput name='Quantity' />
            </div> */}
            <div>
                <Button text='Submit' />
            </div>
        </form>
    </div>
  )
}

export default IngredientForm