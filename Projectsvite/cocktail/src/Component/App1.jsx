import React, {useContext} from 'react'
import { AppContext } from './ContextApi'
import Home from './Home';

function App1(){
    const {name} = useContext(AppContext)
  return(
    <div>
        <h1>Hello, world! App1 Component {name}</h1>
        <Home/>
    </div>
  )
}
export default App1