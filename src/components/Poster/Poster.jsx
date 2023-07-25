import React, { useState } from 'react'
import "./Poster.scss"
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import { BsShareFill } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Comments from '../comments/Comments';



function Poster({post}) {
  const [commentsOpen,setCommentsOpen]= useState(false);
  // const liked = true
  const [like,setLike]=useState(false);
  // useState(()=>{
  //   console.log(liked);
  // },[liked]);
  return (
    <div className='post'>
      <div className="container">
    <div className="user">
        <div className="userinfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
            <Link to={`/profile/${post.userId}`} style={{textDecoration:"none",color:"inherit"}}>
            <span className='name'>{post.name} </span>
            </Link>
            <span className='date'>1 min ago</span>
            </div>
        </div>
        <FiMoreHorizontal/>
         
    </div>
    <div className="content">
      <p>{post.desc}</p>
      <img src={post.img}/>
    </div>
    <div className="Info">
      <div className='item' onClick={()=>{setLike(!like)}}>
        { like ?< AiFillHeart style={{color:"red",fontSize:"22px"}}/> :<AiOutlineHeart style={{fontSize:"22px"}} />  }
      12 Likes
      </div>
      <div className='item ' onClick={()=>{ setCommentsOpen(!commentsOpen)}}>
       <BiCommentDetail style={{fontSize:"22px"}} /> 12 comments
      </div>
      <div className='item '>
        <BsShareFill style={{fontSize:"18px"}}/> Share
      </div>
    </div>
    <div className="comments">
    {commentsOpen ? <Comments/> : null}
    </div>

    </div>
    </div>
  )
}

export default Poster