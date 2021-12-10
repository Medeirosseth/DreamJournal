import React, { useState } from 'react'
import { IonCard, IonCardSubtitle, IonLabel, IonInput, IonItemDivider, IonButton  } from '@ionic/react'
import './register.css'

export default function Register() {
  // const [userName, setUserName] = useState("")
  // const [email, setEmail] = useState("")
  // const [userPassword, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const res = axios.post("/auth/register", {
    //   username, 
    //   email, 
    //   password,
    // });
    //   console.log(res)
  }

  return (
    <div className="register">
      <span className="registerTitle">REGISTER</span>
      <form className="registerForm">
        <label className="registerLabel">Username</label>
        <input 
          type="text" 
          className="registerInput" 
          placeholder="userName" 
        />
        <label className="registerLabel" >Email</label>
        <input 
          type="text" 
          className="registerInput" 
          placeholder="Email" 
        />
        <label className="registerLabel" > Password</label>
        <input 
          type="text" 
            className="registerInput" 
            placeholder="Password" 
          />
        <button className="registerButton">Register</button>
      </form>
        <button className="registerLoginButton">Login</button>
    </div>
  )
}
