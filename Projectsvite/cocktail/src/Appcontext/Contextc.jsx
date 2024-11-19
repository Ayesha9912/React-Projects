import React, {useContext, useState , useCallback, useEffect} from "react";
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
export const AppContext = useContext()
export const AppProvider = ({children})=>{

    const [loading, setloading] = useState(true)
    const [searchTerm, setsearchTerm] = useState("l")
    const [cocktail, setcocktail] = useState(null)
    console.log(cocktail);

    const fetchDrinks = useCallback( async ()=>{
        setloading(true)
        try{
            const response = await fetch(`${url}${searchTerm}`)
            const data = await response.json()
            const {drinks} = data;
            console.log(data, "Data");

            if(drinks){
                const newCocktails = data.map((item)=>{
                    const {idDrink, strDrink, strGlass, strAlcoholic, strDrinkThumb} = item
                    return(
                        {
                            id:idDrink,
                            name:strDrink,
                            glass:strGlass,
                            alcoholic: strAlcoholic,
                            image:strDrinkThumb
                        }
                    )

                })
                setcocktail(newCocktails)
                console.log(newCocktails);

            }
            else{
                setcocktail([])
            }
            setloading(false)
        }
        catch(error){
            setloading(false)
        }
    },[searchTerm])

    useEffect(()=>{
        fetchDrinks()
    }, [searchTerm, fetchDrinks]);

    return(
        <AppContext.Provider value = {{
            loading,
            cocktail,
            searchTerm
        }}>
            {children}
        </AppContext.Provider>
    )
}
