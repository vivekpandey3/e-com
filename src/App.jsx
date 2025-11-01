import React from 'react'
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom"
import Navbar from './Navbar/Navbar'
import ProductList from './Components/ProductList'
import ProductDetails from './Components/ProductDetails'
import Cart from './Components/Cart'
import { CartProvider } from './Components/Context/CartContext'




function App() {
  return (
    <CartProvider >
<Router>
  <Navbar/>
  <Routes>
    <Route path="/" element={<ProductList/>}></Route>
    <Route path="/product/:id" element={<ProductDetails/>}/>
      <Route path="/cart" element={<Cart />} />
  </Routes>
</Router>
    </CartProvider>

  )
}

export default App