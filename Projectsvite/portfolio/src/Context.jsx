import React, { createContext, useEffect, useState } from "react";
export const AppContext = createContext()
export const AppProvider = ({ children }) => {
    const [loading, setloading] = useState(true)
    useEffect(() =>{
        const load = () =>{
         setTimeout(() => {
                setloading(false)
            }, 1000);
        }
        load()
    }, [])
    const [isOpen, setOpen] = useState(false)

    const openFalse = ()=>{
        (!isOpen)
    }
    return(
        <AppContext.Provider value={{
            isOpen,
            setOpen,
            loading,
            openFalse
        }}>
            {children}
        </AppContext.Provider>
    )
}