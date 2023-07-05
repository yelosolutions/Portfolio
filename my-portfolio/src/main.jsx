import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//how to use redux toolkit(need to: fetch data from API)
//provider will service 'app' with store(part of global store)
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
