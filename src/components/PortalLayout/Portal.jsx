import React from 'react'
import Navbar from '../Navbar/Navbar'
import Leftbar from '../Leftbar/Leftbar'
import Rightbar from '../Rightbar/Rightbar'
import { Outlet } from 'react-router-dom'
import "./Portal.scss"
import "../../style.scss"

function Portal() {
  return (
    
    <div className='theme-dark'>
    <Navbar/>
    <div className='portal' style={{display:"flex"}}>
    <Leftbar/>
    <Outlet/>
    <Rightbar/>
    </div>
    </div>
  )
}

export default Portal