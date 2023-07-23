import React from 'react'
import { useSelector } from 'react-redux'
import {Navigate,useLocation} from "react-router-dom"

export const PrivateRoute = () => {
  const location=useLocation()
  return (
    <div>PrivateRoute</div>
  )
}
