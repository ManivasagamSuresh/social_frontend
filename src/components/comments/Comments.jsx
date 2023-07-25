import React, { useContext } from 'react'
import "./Comments.scss"
import { AuthContext } from '../../context/authContext'

function Comments() {
    const { currentUser} = useContext(AuthContext);
    const cmts = [
        {
            id:1,
            desc: "hello louis enala 3rd round mudila , book padichom 😂",
            name:"mani",
            userId: 2,
            profilePic: currentUser.profilePic
        },
        {
            id:2,
            desc: "hello louis enala 3rd round mudila , book padichom 😂",
            name:"mani",
            userId: 2,
            profilePic: currentUser.profilePic
        }

    ]
    console.log(cmts);
  return (
    <div className="comments">
        <div className="write">
        <img src={currentUser.profilePic}/>
        <input type='text' placeholder='write a comment'/>
        <button>Send</button>
        </div>
        {cmts.map((cmt)=>{
            return <div className='comment'>
                <img src={cmt.profilePic}/>
                <div className="info">
                <div>{cmt.name}</div>
                <p>{cmt.desc}</p>
                </div>
                <span className='date'>1 min ago</span>
                
            </div>
        })}
    </div>
  )
}

export default Comments