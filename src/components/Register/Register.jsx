import React from 'react'
import "./Register.scss"
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='register'>
      <div className="card">
      <div className="right">
          <h1>Register</h1>
          <form>
            <input type={"text"} placeholder="username"/>
            <input type={"text"} placeholder="email"/>
            {/* <input type={"text"} placeholder="name"/> */}
            <input type={"password"} placeholder="password" />
            <button> Register</button>

          </form>
        </div>
        <div className="left">
          <h1>MB Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ex
            nemo pariatur vel aspernatur  
          </p>
          <span>Already having a account ?</span>
          <Link to={"/login"}><button>Login</button></Link>
        </div>
        
      </div>
    </div>
  )
}

export default Register