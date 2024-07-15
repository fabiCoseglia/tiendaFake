import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './router/index.jsx'
import  {RouterProvider}  from 'react-router-dom'
import { CartProvider } from './contexts/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider  router={router}/>
    </CartProvider>
  </React.StrictMode>,
)
