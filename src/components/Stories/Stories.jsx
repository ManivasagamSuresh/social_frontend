import React, { useContext } from 'react'
import "./Stories.scss"
import { AuthContext } from '../../context/authContext'

function Stories() {
  const {currentUser} = useContext(AuthContext)
  const data = [{
    id:1,
    name:"mani",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnvaZNpjULbfl6deEvyV3nPzWs9l9383OcKg&usqp=CAU"
  },
  {
    id:1,
    name:"bakya m",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnvaZNpjULbfl6deEvyV3nPzWs9l9383OcKg&usqp=CAU"
  },{
    id:1,
    name:"mani",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnvaZNpjULbfl6deEvyV3nPzWs9l9383OcKg&usqp=CAU"
  },
  {
    id:1,
    name:"bakya m",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnvaZNpjULbfl6deEvyV3nPzWs9l9383OcKg&usqp=CAU"
  },
  
]

  return (
    <div className='stories'>
      <div className="story">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnvaZNpjULbfl6deEvyV3nPzWs9l9383OcKg&usqp=CAU" alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {data.map((story)=>{
        {console.log(story)}
        return (
        <div className="story">
          <img src={story.img} alt="" />
          <span>{story.name}</span>

        </div>)
      })}
    </div>
  )
}

export default Stories