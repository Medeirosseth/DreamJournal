import React, { useState } from 'react'
import { IonCard, IonCardSubtitle, IonLabel, IonInput, IonItemDivider, IonButton  } from '@ionic/react'
import './register.css'
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function Register() {
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false)
    try{

    const res = await axios.post("/auth/register", {
      username, 
      email, 
      password, 
    });
    res.data && window.location.replace("/login")
  } catch (err) {
    setError(err)
  }
  }

  return (
    <div className="register">
    <i class="fas fa-cloud"></i>
      <span className="registerTitle">REGISTER</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <input 
          type="text" 
          className="registerInput" 
          placeholder="userName" 
          onChange={e => setUserName(e.target.value)}
        />
        <input 
          type="text" 
          className="registerInput" 
          placeholder="Email" 
          onChange={e => setEmail(e.target.value)}
        />
    
        <input 
          type="text" 
            className="registerInput" 
            placeholder="Password" 
            onChange={e => setPassword(e.target.value)}
          />
        <button className="registerButton" type="submit">Register</button>
      </form>
      <div className="registerLoginWrapper">
        <Link to="login">
          <button className="registerLoginButton">Login</button>
        </Link>
      </div>
      { error && <span className="error">Something went wrong <i class="fas fa-sad-tear"></i></span>}
    </div>
  )
}
