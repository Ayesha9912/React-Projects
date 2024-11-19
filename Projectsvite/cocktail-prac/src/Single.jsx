import React, { useCallback, useEffect, useState } from 'react'
import logo from './assets/logo.svg'
import { Link, useParams } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
function Single(){
    const { id } = useParams()
    const [cocktail, setcocktail] = useState(null)
    let singleInfo = useCallback(async () => {
        try {
            let res = await fetch(`${url}${id}`)
            let data = await res.json()
            console.log(data);
            if (data.drinks){
                const{
                    strCategory: category,
                    strDrinkThumb: img,
                    strGlass: glass,
                    strInstructions: instruction,
                    strDrink: drink,
                    strAlcoholic: alcohol,
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5,
                } = data.drinks[0]
                const Ingredient = [
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5
                ]
                const newCock = {
                    category,
                    img,
                    instruction,
                    drink,
                    alcohol,
                    glass,
                    Ingredient
                }
                console.log(newCock);
                setcocktail(newCock)
            }
            else {
                setcocktail(null)
            }
        }
        catch (error) {
            console.log(error);
        }
    })
    useEffect(() => {
        singleInfo()
    }, [id])
    if (!cocktail){
        <h1>No product to be displayed</h1>
    }
    else {
        const{
            category,
            img,
            instruction,
            drink,
            alcohol,
            glass,
            Ingredient
           } = cocktail
        return(
            <div>
                <Link to={'/'}>
                <div className='w-full flex justify-center items-center'>
                    <img src={logo} alt="Logo" className='mt-5'/>
                </div>
                </Link>
                <div className='w-full flex justify-center items-center mt-9'>
                    <div className='w-[95%] md:w-[70%] lg:[50%]  md:flex mt-10 shadow-xl mb-10'>
                        <img src={img} alt={drink} className='w-[100%] md:w-[40%]'/>
                        <div className='pl-3 mb-5'>
                            <h1 className='text-2xl font-bold'>{drink}</h1>
                            <p className='font-bold text-xl mt-2'>Category :<span className='font-normal'>{category}</span></p>
                            <p className='font-bold text-xl mt-2'>Type :<span className='font-normal'>{alcohol}</span></p>
                            <p className='font-bold text-xl mt-2'>Serve In:<span className='font-normal'>{glass}</span></p>
                            <p className='font-bold text-xl mt-2'>Instructions:<span className='font-normal'>{instruction}</span></p>
                            <p className='font-bold text-xl mt-2'>Ingredients</p>
                            {Ingredient ? Ingredient.map((item)=>(
                              <ul className='text-lg list-disc ml-6'>
                                <li>{item}</li>
                              </ul>
                            )) : null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Single