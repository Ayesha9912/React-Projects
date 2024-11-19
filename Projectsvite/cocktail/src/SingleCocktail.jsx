import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function SingleCocktail() {
    const { id } = useParams();

    const [loading, setLoading] = useState(false);
    const [cocktail, setcocktail] = useState(null);

    useEffect(() => {
        setLoading(true);
        async function getCocktail(){
            try {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
                const data = await response.json();
                console.log("Data In Single Coctail", data);
                if (data.drinks){
                    const {
                        strDrink: name,
                        strDrinkThumb: image,
                        strAlcoholic: info,
                        strCategory: category,
                        strGlass: glass,
                        strInstructions: instructions,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    } = data.drinks[0];
                    const ingredients = [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    ];

                    const newCocktail = {
                        name,
                        image,
                        info,
                        category,
                        glass,
                        instructions,
                        ingredients,
                    };
                    setcocktail(newCocktail);
                } else {
                    setcocktail(null);
                }
            } catch (error){
                console.log(error);
            }
            setLoading(false); // Update loading state after fetch
        }
        getCocktail();
    }, [id]);
    if (loading){
        return <div className='flex justify-center items-center h-screen'><div className='animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900'></div></div>;
    }
    if (!cocktail){
        return <h2 className='text-center mt-10 text-3xl'>No cocktail to display</h2>;
    } else {
        const {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
        } = cocktail;
        return (
            <section className='container mx-auto px-4 py-8'>
                <Link to="/" className='inline-block bg-gray-900 text-white px-4 py-2 rounded-lg mb-4 hover:bg-gray-800'>Back to Home</Link>
                <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden'>
                    <div className='md:flex'>
                        <div className='md:w-1/3 md:flex-shrink-0'>
                            <img src={image} alt={name} className='w-full h-auto object-cover md:h-full' />
                        </div>
                        <div className='md:w-2/3 p-6'>
                            <h1 className='text-3xl font-bold mb-2'>{name}</h1>
                            <p className='text-lg mb-4'><strong>Category:</strong>{category}</p>
                            <p className='text-lg mb-4'><strong>Type:</strong>{info}</p>
                            <p className='text-lg mb-4'><strong>Serve in:</strong>{glass}</p>
                            <p className='text-lg mb-4'><strong>Instructions:</strong>{instructions}</p>
                            <div className='mb-4'>
                                <p className='text-lg'><strong>Ingredients:</strong></p>
                                <ul className='list-disc ml-8'>
                                    {ingredients.map((item, index) => (
                                        item ? <li key={index} className='text-base'>{item}</li> : null
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
