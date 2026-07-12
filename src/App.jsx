import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Product from './pages/Products.jsx'
import Cart from './pages/Cart.jsx'
import NavBar from './pages/Navbar.jsx'
import Products from './pages/Products.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import CustomOrder from './pages/CustomOrder.jsx'
import Reviews from './pages/Reviews.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'



function App() {
  return (
    <>
    <NavBar/>
    <Routes>
     <Route path = "/" element={<Home/>}/>
     <Route path = "/products" element={<Products/>}/>
      <Route
          path="/products/:id"
          element={<ProductDetails/>}
        />
     <Route path = "/cart" element={<Cart/>}/>
     <Route path = "/custom-orders" element={<CustomOrder/>}/>
     <Route path = "/reviews" element={<Reviews/>}/>
     <Route path = "/about" element={<About/>}/>
     <Route path="/login" element={<Login/>} />
    </Routes>

    </>
  )
}

export default App
