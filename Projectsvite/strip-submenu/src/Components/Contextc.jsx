import React, { createContext, useState } from "react";
import Data from './Data.jsx';

export const AppContext = createContext()
export const AppProvider = ({children})=>{
    const [isSidebar, setisSidebar] = useState(false)
    const [isMenu, setisMenu] = useState(false)
    const [page, setpage] = useState({page:'' , link:[]})
    const [location, setlocation] = useState({})
    const openSideBar = ()=>{
    setisSidebar(true)
    }
    const closeSideBar = ()=>{
        setisSidebar(false)
    }
    const openSideMenu = (text, cordinates)=>{
        const page = Data.find((links)=> links.page === text)
        setisMenu(true)
        console.log(isMenu);
        setpage(page)
        setlocation(cordinates)
    }
    const closeMenu = ()=>{
        setisMenu(false)
    }
    return(
        <AppContext.Provider value={{
            openSideMenu,
            openSideBar,
            closeMenu,
            location,
            page,
            isMenu
        }}>
            {children}
        </AppContext.Provider>
    )
}