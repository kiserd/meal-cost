// library
import axios from 'axios';
import { useState, useEffect } from 'react';
// component
import IngredientCard from '../components/IngredientCard';


const Home = () => {

    const [ingredients, setIngredients] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/ingredients').then((res) => {
            console.log('res: ', res)
            console.log('res.data: ', res.data.ingredients)
            setIngredients(res.data.ingredients)
            console.log('ingredients: ', ingredients)
        })

    }, [])


    return (
        <div className='flex flex-row'>
            <div className='basis-2/3 flex flex-col'>
                {ingredients ? ingredients.map((ingredient) => {
                    return (
                        <div className='m-2'>
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
export default Home;
