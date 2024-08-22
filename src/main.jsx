import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { Provider } from 'react-redux';


import { persistor, store } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App/App.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
<PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
    <App></App></BrowserRouter>

    </PersistGate>

</Provider>
  

)
