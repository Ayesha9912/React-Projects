import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { AppProvider } from './Context.jsx'
import { AppProvider } from './Components/Contextc.jsx'
import Appc from './Components/Appc.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AppProvider>
    <App />
    </AppProvider> */}
    <AppProvider>
      <Appc/>
    </AppProvider>
  </React.StrictMode>,
)
