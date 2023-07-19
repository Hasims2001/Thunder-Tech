import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { Login } from './Login'


export const AllRoutes = () => {
  return (
    <div>
        <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
    </div>
  )
}
