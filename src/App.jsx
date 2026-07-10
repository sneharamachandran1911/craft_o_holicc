import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Product from './pages/Products.jsx'
import Cart from './pages/Cart.jsx'
import NavBar from './pages/Navbar.jsx'
import ProductDetails from './components/ProductDetails.jsx'

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
     <Route path = "/" element={<Home/>}/>
     <Route path = "/products" element={<Product/>}/>
      <Route
          path="/products/:id"
          element={<ProductDetails />}
        />
     <Route path = "/cart" element={<Cart/>}/>
    </Routes>
    </>
  )
}

export default App
