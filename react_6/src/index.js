import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { BackdropStatusProvider } from './context/backdrop-status'
import { CartStatusProvider } from './context/cart-status'
import { AddStatusProvider } from './context/add-status'
import { CartListProvider } from './context/cart-list'
import App from './App'



const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(

<React.StrictMode>



 <BackdropStatusProvider>
 <CartStatusProvider>
 <CartListProvider>
 <AddStatusProvider>
  <App />
 </AddStatusProvider>
 </CartListProvider>
 </CartStatusProvider>
 </BackdropStatusProvider>



</React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
