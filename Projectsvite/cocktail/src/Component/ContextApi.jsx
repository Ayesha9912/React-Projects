// import React, {useState, createContext} from "react";
// export const AppContext = createContext()
// export const AppProvider = ({children})=> {

//     console.log(children);

//     const [name, setName] = useState("Ali")

//     const [count, setCount] = useState(0)

//     const Incr = ()=> {
//         setCount(count + 1)
//     }
//     const Decr = ()=> {
//         setCount(count - 1)
//     }
//     return(
//         <AppContext.Provider value={
//             {
//                 name,
//                 count,
//                 Incr,
//                 Decr
//             }
//         }>
//             {children}
//         </AppContext.Provider>
//     )
// }
import React, {useState, createContext} from "react";
export const AppContext = createContext()
export const AppProvider = ({children})=>{

    const [count, setcount] = useState(0)
    const [name, setname] = useState(name)

    const incr = ()=>{
        setcount(count + 1)
    }
    const dec = ()=>{
        setcount(count - 1)
    }

    return(
        <AppContext.Provider value={{
            name, 
            count,
            incr,
            dec
        }}>
            {children}

        </AppContext.Provider>
    )

}