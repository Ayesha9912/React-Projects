import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import AllReducers from './Reducer/index.jsx'

let store = createStore(AllReducers)



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
      <App/>
  </Provider>
  </StrictMode>,
)
