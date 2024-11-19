import React, { createContext, useCallback, useEffect, useState } from "react";
// import Cocklist from "./Cocklist";
export const AppContext = createContext()
const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
export const AppProvider = ({ children }) => {
    const [searchItem, setsearchItem] = useState("l")
    const [loading, setloading] = useState(true)
    const [cocktail, setcocktail] = useState(null)

    const createList = useCallback(async () =>{
        setloading(true)
        try {
            let res = await fetch(`${apiUrl}${searchItem}`)
            let data = await res.json()
            console.log(data);
            const { drinks } = data
            if (drinks){
            const drinksName = drinks.map((item) =>{
                    const { idDrink, strDrink, strGlass, strAlcoholic, strDrinkThumb } = item
                    return ({
                        id: idDrink,
                        image: strDrinkThumb,
                        Glass: strGlass,
                        name: strDrink,
                        alcholic: strAlcoholic
                    })
                })
                setcocktail(drinksName)
            }
            else{
                setcocktail([])
            }
            setloading(false)
        }
        catch (error) {
            console.log(error, "error");
        }
    }, [searchItem])

    useEffect(()=>{
        createList()
    }, [searchItem])

    return (
        <AppContext.Provider value={{
            setsearchItem,
            cocktail,
            loading
        }}>
            {children}
        </AppContext.Provider>
    )
}