import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { Login } from './Login'
import SingleProductpage from '../../Ranvijay/SingleProductpage'
import { ProductList } from '../../Ranvijay/ProductList'


export const AllRoutes = () => {
  return (
    <div>
        <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/products' element={<ProductList/>} />
        
        <Route path="/products/:id" element={<SingleProductpage/>}/> */}
      </Routes>
    </div>
    </div>
  )
}
