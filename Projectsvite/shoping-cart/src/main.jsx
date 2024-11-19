import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Appc from './comp/Appc.jsx'

// import AppProvider from './Context.jsx'
// import Counter from './Components/Counter.jsx'
// import { AppProvider } from './Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AppProvider> */}
      {/* <App /> */}
      <Appc/>
    {/* </AppProvider> */}

    {/* <Counter/> */}
  </React.StrictMode>,
)
