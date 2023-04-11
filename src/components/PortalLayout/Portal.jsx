import React from 'react'
import Navbar from '../Navbar/Navbar'
import Leftbar from '../Leftbar/Leftbar'
import Rightbar from '../Rightbar/Rightbar'
import { Outlet } from 'react-router-dom'

function Portal() {
  return (
    
    <>
    <Navbar/>
    <div className='portal' style={{display:"flex"}}>
    <Leftbar/>
    <Outlet/>
    <Rightbar/>
    </div>
    </>
  )
}

export default Portal