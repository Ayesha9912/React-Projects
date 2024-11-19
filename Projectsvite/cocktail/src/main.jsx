import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import App1 from './Component/App1'
import './index.css'
import { AppProvider } from './Context.jsx'
// import { AppProvider } from './Appcontext/Contextc.jsx'
// import Appc from './Appcontext/Appc.jsx'

// import {AppProvider} from './Component/ContextApi'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
    <App />
    </AppProvider>

    {/* <AppProvider>
      <Appc/>
    </AppProvider> */}


{/* <AppProvider>
  <App1 />
</AppProvider> */}
    

  </React.StrictMode>,
)
