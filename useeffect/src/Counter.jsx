import { useState, useEffect} from "react"
import Maincounter from "./Maincounter"

export default function Counter(){
    const [state, setstate] = useState(true)
    useEffect(() => {
      console.log("state mounted");
      return () => {
        console.log("state unmounted");
      }
    }, [])
  return(
    <div>
       {state ?  <Maincounter/> : ""}
        <button onClick={ (e)=> setstate(!state)} className="btn3">Toggle</button>
    </div>
  )
}
