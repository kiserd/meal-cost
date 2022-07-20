// library
import axios from 'axios';
import { useState, useEffect } from 'react';
// component
import IngredientCard from '../components/IngredientCard';
import Button from '../components/Button'


const Ingredients = () => {

    const [ingredients, setIngredients] = useState([]);
    const [formOpen, setFormOpen] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:5000/api/ingredients').then((res) => {
            setIngredients(res.data.ingredients)
        })

    }, [])


    return (
        <div className='flex flex-row'>
            <div className='basis-2/3 flex flex-col justify-items-center'>
                <Button text='New' />
                {ingredients ? ingredients.map((ingredient) => {
                    return (
                        <div key={ingredient.name} className='m-2'>
                            <IngredientCard ingredient={ingredient} />
                        </div>
                    )
                }): 'Loading'}
            </div>
            <div className='basis-1/3 border-2 rounded-md border-custom-cool-light'>
                <p className='text-custom-text-primary'>
                    placeholder for filters
                </p>
            </div>
        </div>
    );
};


export default Ingredients;
