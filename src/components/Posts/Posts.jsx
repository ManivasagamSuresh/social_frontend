import React from 'react'
import "./Posts.scss"
import Poster from "../Poster/Poster"

function Posts() {
  const data = [{
    id:1,
    name:"mani",
    userId:1,
    desc:"Lorem asjzcbnyrjchxzkumfrkngh",
    profilePic:"https://www.shutterstock.com/image-photo/fashion-model-woman-colorful-bright-260nw-1084791122.jpg",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnvaZNpjULbfl6deEvyV3nPzWs9l9383OcKg&usqp=CAU"
  },
  {
    id:1,
    name:"mani",
    userId:1,
    desc:"Lorem asjzcbnyrjchxzkumfrkngh",
    profilePic:"https://www.shutterstock.com/image-photo/fashion-model-woman-colorful-bright-260nw-1084791122.jpg",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnvaZNpjULbfl6deEvyV3nPzWs9l9383OcKg&usqp=CAU"
  },
  {
    id:2,
    name:"mani",
    userId:1,
    desc:"Lorem asjzcbnyrjchxzkumfrkngh",
    profilePic:"https://www.shutterstock.com/image-photo/fashion-model-woman-colorful-bright-260nw-1084791122.jpg",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnvaZNpjULbfl6deEvyV3nPzWs9l9383OcKg&usqp=CAU"
  },
  {
    id:3,
    name:"mani",
    userId:2,
    desc:"Lorem asjzcbnyrjchxzkumfrkngh",
    profilePic:"https://www.shutterstock.com/image-photo/fashion-model-woman-colorful-bright-260nw-1084791122.jpg",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnvaZNpjULbfl6deEvyV3nPzWs9l9383OcKg&usqp=CAU"
  },
  {
    id:4,
    name:"mani",
    userId:3,
    desc:"Lorem asjzcbnyrjchxzkumfrkngh",
    profilePic:"https://www.shutterstock.com/image-photo/fashion-model-woman-colorful-bright-260nw-1084791122.jpg",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnvaZNpjULbfl6deEvyV3nPzWs9l9383OcKg&usqp=CAU"
  },
]
  return (
    <div className='posts'>
      {data.map(post=>
        <Poster post={post} key={post.id}/>
        )}
    </div>
  )
}

export default Posts