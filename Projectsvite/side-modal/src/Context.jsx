import React, {createContext, useState} from "react";
export const AppContext = createContext()
export function AppProvider({children}){

    const [modal, setModal]= useState(false)
    const [sidebar, setsidebar] = useState(false)


    const isSidebarOpen = ()=>{
        setsidebar(true)
    }
    const isSidebarClose = ()=>{
        setsidebar(false)
    }
    const isModelOpen = ()=>{
        setModal(true)
        console.log('clicked');
    }
    const isModelClose = ()=>{
        setModal(false)
    }
    return(
        <AppContext.Provider value={
            {
                modal,
                sidebar,
                isModelOpen,
                isModelClose,
                isSidebarOpen,
                isSidebarClose
            }
        }>

        {children}

        </AppContext.Provider>
    )
}