import React, { createContext, useCallback, useState } from "react";

export const AppContext = createContext()

export const AppProvider = ({children})=>{
    const [ismodel, setismodel] = useState(false)
    const [issidebar, setissidebar] = useState(false)

    const isModelopen = ()=>{
        setismodel(true)
        console.log(ismodel, "model");
    }
    const isModelclose = ()=>{
        setismodel(false)
    }
    const isSidebaropen = ()=>{
        setissidebar(true)
    }
    const isSidebarclose = ()=>{
        setissidebar(false)
    }
    return(
        <AppContext.Provider value={{
            ismodel,
            issidebar,
            isModelopen,
            isModelclose,
            isSidebarclose,
            isSidebaropen
        }}>
            {children}
        </AppContext.Provider>
    )
}