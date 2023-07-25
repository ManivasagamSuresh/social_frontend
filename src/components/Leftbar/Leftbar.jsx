import React, { useContext } from 'react'
import "./Leftbar.scss"
import { AuthContext } from '../../context/authContext'
import frnd from "../../assets/friend.png"
import grp from "../../assets/2.png"
import marketplace from "../../assets/3.png"
import watch from "../../assets/4.png"
import events from "../../assets/6.png"
import gaming from "../../assets/7.png"
import msgs from "../../assets/10.png"


function Leftbar() {
  const {currentUser} = useContext(AuthContext);
  return (
    <div className='leftbar'>
      <div className='container'>
        <div className='menu'>
        <div className='user'>
        <img src={`${currentUser.profilePic}`} alt=''/>
          <span>{currentUser.name}</span>
          </div>
          <div className='item'>
            <img src={frnd} alt="" />
            <span>Friends</span>
          </div>
          <div className='item'>
            <img src={grp} alt="" />
            <span>Group</span>
          </div>
          <div className='item'>
            <img src={marketplace} alt="" />
            <span>Marketplace</span>
          </div>
          <div className='item'>
            <img src={watch} alt="" />
            <span>Watch</span>
          </div>
        </div>
        <hr/>
        <div className='menu'>
          
          <span>Your Shortcuts</span>
          <div className='item'>
            <img src={events} alt="" />
            <span>Events</span>
          </div>
          <div className='item'>
            <img src={gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className='item'>
            <img src={msgs} alt="" />
            <span> Messages</span>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Leftbar