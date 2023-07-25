import React from 'react'
import "./Profile.scss"
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsPinterest } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';
import { BsGlobe } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { FiMoreVertical } from 'react-icons/fi';
import Posts from '../Posts/Posts';



function Profile() {
  return (
    <div className='Profile'>
      <div className="images">
      <img src="https://i.pinimg.com/564x/02/77/14/0277149dd2e3c0fca6dd8c50ed237fdb.jpg" alt="" className='cover'/>
      <img src="https://i.pinimg.com/236x/eb/26/44/eb2644275e3a6122d8cb043ada3c8cfa.jpg" alt="" className='profilePic'/>
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://www.facebook.com/">
              <BsFacebook size={"1.5em"}/>
            </a>
            <a href="https://www.instagram.com/">
              <BsInstagram size={"1.5em"}/>
            </a>
            <a href="https://twitter.com/">
              <BsTwitter size={"1.5em"}/>
            </a>
            <a href="https://in.pinterest.com/">
              <BsPinterest size={"1.5em"}/>
            </a>
          </div>
          <div className="center">
            <span>Peter Louis</span>
            <div className="info">
              <div className="item"><MdLocationPin size={"1.5em"}/> <span>Usilampatti</span> </div>
              <div className="item"><BsGlobe size={"1.5em"}/> <span>Peter PU </span></div>
              
            </div>  
            <button>Follow</button> 
          </div>
          <div className="right">
            <div><AiOutlineMail size={"1.5em"}/></div>
            <div><FiMoreVertical size={"1.5em"}/></div>
          </div>
          
        </div>
        <Posts/>
      </div>
      
    </div>
  )
}

export default Profile