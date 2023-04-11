import React from 'react'
import Navbar from '../Navbar/Navbar'
import Leftbar from '../Leftbar/Leftbar'
import Rightbar from '../Rightbar/Rightbar'
import { Outlet } from 'react-router-dom'

function Portal() {
  return (
    
    <>
    <Navbar/>
    <Leftbar/>
    <Outlet/>
    <Rightbar/>
    
    </>
  )
}

export default Portal