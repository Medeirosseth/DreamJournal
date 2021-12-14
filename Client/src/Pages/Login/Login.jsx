import React, { useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import {IonInput, IonCard,  IonItemDivider, IonButton } from '@ionic/react'
import './login.css'
import { Context, ContextProvider } from '../../Context/Context';
import axios from 'axios'

export default function Login() {

  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching} = useContext(Context)


  const handleSubmit = async (e)=> {
    e.preventDefault()
    dispatch({type:"LOGIN_START"});
    try{
      const res = await axios("auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value
      })
      dispatch({type:"LOGIN_SUCCESS", payload:res.data});
    } catch(err){
      dispatch({type:"LOGIN_FAILURE"})
    }
  }
  
  console.log(user)
  return (
    <div className="login">
      <span className="loginTitle">LOGIN</span>
      <form className="loginForm"  onSubmit={handleSubmit}>
        <label>username</label>
        <input type="text" className="loginInput" placeholder="Enter your username" ref={userRef} />
        <label > Password</label>
        <input type="text" className="loginInput" placeholder="Password" ref={passwordRef}/>
        <button className="loginButton" type="submit">Login</button>
      </form>
      <Link to="/register"> 
        <button className="loginRegisterButton">Register</button>
      </Link>
    </div>
    )
  }
  