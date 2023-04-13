import React from 'react'
import "./Home.scss"
import Stories from '../Stories/Stories'
import Posts from '../Posts/Posts'

function Home() {
  return (
    <div className='Home'>
      <Stories/>
      <Posts/>
    
    </div>
    
  )
}

export default Home