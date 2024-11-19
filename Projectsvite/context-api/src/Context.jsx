import React, {createContext, useState} from "react";

export const AppContext = createContext()

export function AppProvider({children}) {

    const [Count, setCount] = useState(0)

    const handleIncrement = ()=> {
        setCount(Count + 1)
    }
    const handleDecrement = ()=> {
        setCount(Count - 1)
    } 

    return(
        <AppContext.Provider value={
            {
                Count,
                handleIncrement,
                handleDecrement
            }
        }>
            {children}
        </AppContext.Provider>
    )

}