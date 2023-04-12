import React, { useContext } from 'react'
import "./Leftbar.scss"
import { AuthContext } from '../../context/authContext'

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
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnvaZNpjULbfl6deEvyV3nPzWs9l9383OcKg&usqp=CAU" alt="" />
            <span>Friends</span>
          </div>
          <div className='item'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnvaZNpjULbfl6deEvyV3nPzWs9l9383OcKg&usqp=CAU" alt="" />
            <span>Group</span>
          </div>
          <div className='item'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnvaZNpjULbfl6deEvyV3nPzWs9l9383OcKg&usqp=CAU" alt="" />
            <span>Marketplace</span>
          </div>
          <div className='item'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnvaZNpjULbfl6deEvyV3nPzWs9l9383OcKg&usqp=CAU" alt="" />
            <span>Watch</span>
          </div>
        </div>
        <hr/>
        <div className='menu'>
          
          <span>Your Shortcuts</span>
          <div className='item'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnvaZNpjULbfl6deEvyV3nPzWs9l9383OcKg&usqp=CAU" alt="" />
            <span>Events</span>
          </div>
          <div className='item'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnvaZNpjULbfl6deEvyV3nPzWs9l9383OcKg&usqp=CAU" alt="" />
            <span>Gaming</span>
          </div>
          <div className='item'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnvaZNpjULbfl6deEvyV3nPzWs9l9383OcKg&usqp=CAU" alt="" />
            <span> Messages</span>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Leftbar