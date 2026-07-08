import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import Cart from './pages/Cart.jsx'
import NavBar from './pages/Navbar.jsx'

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
     <Route path = "/" element={<Home/>}/>
     <Route path = "/product" element={<Product/>}/>
     <Route path = "/cart" element={<Cart/>}/>
    </Routes>
    </>
  )
}

export default App
