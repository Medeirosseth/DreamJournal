import React from 'react'
import { Link } from 'react-router-dom'
import {IonInput, IonCard,  IonItemDivider, IonButton } from '@ionic/react'
import './login.css'

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">LOGIN</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="text" className="loginInput" placeholder="Email" />
        <label > Password</label>
        <input type="text" className="loginInput" placeholder="Password" />
        <button className="loginButton">Login</button>
      </form>
      <Link to="/register"> 
        <button className="loginRegisterButton">Register</button>
      </Link>
    </div>
    )
  }
  