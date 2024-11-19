import React, { createContext, useCallback, useEffect, useState } from "react";


const url  = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
export const AppContext = createContext()

export const AppProvider =({children})=>{

    const [loading, setloading] = useState(true);
    const [searchTerm, setsearchTerm] = useState('l');
    const [cocktail, setcocktail]= useState(null);
    console.log("cocktail: ", cocktail);

    const fetchDrinks  = useCallback(async ()=>{
        setloading(true)

        try{
            const response = await fetch(`${url}${searchTerm}`)
            const data = await response.json();
            console.log(data, "Data");

            const {drinks} = data;

            if(drinks){
                const newCocktails = drinks.map((item)=>{
                    const {idDrink ,strDrink, strGlass, strAlcoholic, strDrinkThumb} = item
                    return(
                        {
                            id: idDrink,
                            name: strDrink,
                            glass: strGlass,
                            image: strDrinkThumb,
                            alcoholic: strAlcoholic,
                        }

                    )
                })
                console.log("newCocktails: ", newCocktails);
                setcocktail(newCocktails)
            }
            else{
                setcocktail([])
            }
            setloading(false)
        }
        catch (error){
            setloading(false)
        }


    }, [searchTerm])

    useEffect(()=>{
        fetchDrinks()
    }, [searchTerm, fetchDrinks])
    return(
        <AppContext.Provider value={{
            loading,
            cocktail,
            setsearchTerm,

        }}>
            {children}

        </AppContext.Provider>
    )
}