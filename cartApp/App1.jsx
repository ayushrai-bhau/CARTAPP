import React from 'react'
import Navbar from "./component/Navbar"
import Product from "./component/Productcard"
import CartPage from './component/cartPage'
import FavPage from './component/farPage'
import './App1.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App1 = () => {
  return (
    <BrowserRouter>

    <div>
    <Navbar/>
    <Routes>
    <Route exact path='/' element={<Product/>}/>
    <Route path='/cart' element={<CartPage/>}/>
    <Route path='/fav' element={<FavPage/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App1