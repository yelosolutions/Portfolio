import React from 'react';
import ReactDOM from 'react-dom/client';
//how to use redux toolkit(need to: fetch data from API)
//provider will service 'app' with store(part of global store)
import { Provider } from 'react-redux';
import App from './App';
import { store }  from './services/store.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
);
