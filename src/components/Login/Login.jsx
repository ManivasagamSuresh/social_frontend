import React, { useContext } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

function Login() {
  const navigate = useNavigate();
  const {login} =useContext(AuthContext)
  const handleLogin = ()=>{
    login()
    navigate("/")
  }
  return (
    <div className="Login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ex
            nemo pariatur vel aspernatur  
          </p>
          <span>Don't you have a account ?</span>
          <Link to={"/register"}><button>Register</button></Link> 
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type={"text"} placeholder="username"/>
            <input type={"password"} placeholder="password" />
            <button onClick={()=>{handleLogin()}}> Login</button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
