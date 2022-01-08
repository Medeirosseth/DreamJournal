import React, { useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import { Context} from '../../Context/Context';
import axios from 'axios'

export default function Login() {

  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching} = useContext(Context)


  const handleSubmit = async (e)=> {
    e.preventDefault()
    dispatch({type:"LOGIN_START"});
    try{
      const res = await axios.post("auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value
      })
      dispatch({type:"LOGIN_SUCCESS", payload:res.data});
    } catch(err){
      dispatch({type:"LOGIN_FAILURE"})
    }
  }
  
  return (
    <div className="login">
      <i class="fas fa-cloud loginCloud"></i>
      <span className="loginTitle">LOGIN</span>
      
      <form className="loginForm"  onSubmit={handleSubmit}>
        <input 
          type="text" 
          className="loginInput" 
          placeholder="Enter your username" 
          ref={userRef} 
        />
        <input 
          type="password" 
          className="loginInput" 
          placeholder="Password" 
          
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
      </form>
      <div className="loginRegisterWrapper" >
        <Link to="/register"> 
          <button className="loginRegisterButton">Register</button>
        </Link>
      </div>
    </div>
    )
  }
  