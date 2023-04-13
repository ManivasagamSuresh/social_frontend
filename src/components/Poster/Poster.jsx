import React from 'react'
import "./Poster.scss"
import { AiOutlineHeart } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import { FaBBsShareeer } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';
import { Link } from 'react-router-dom';


function Poster({post}) {
  return (
    <div className='post'>
    <div className="user">
        <div className="userinfo">
            <img src={post.img} alt="" />
            
            <Link to={`/profile/${post.userId}`} style={{textDecoration:"none",color:"inherit"}}>
            <span>{post.name}</span>
            <span className='date'>1 min ago</span>
            </Link>
        </div>
        <FiMoreHorizontal/>
    </div>
    <div className="content"></div>
    <div className="content"></div>


    </div>
  )
}

export default Poster