import React from 'react'
// import { Link } from 'react-router-dom'
import {IonInput, IonCard, IonLabel, IonCardSubtitle, IonItemDivider, IonButton } from '@ionic/react'
import './login.css'

export default function Login() {
  return (
    <div className="logIn">
      <div className="loginImgContainer"> 
      <span className="loginText">LOGIN</span>
        <div className="logoContainer">
          <img className="loginLogo" src='https://static.independent.co.uk/2021/07/19/16/newFile-10.jpg?width=1200&auto=webp&quality=75'alt='dr.eam logo'/>
        </div>
      </div>
      <form className="loginForm">
      <IonCard className="container"> 
        <IonInput className="username" placeholder="email"></IonInput>
        <IonItemDivider />
        <IonInput className="password" placeholder="password"></IonInput>
      </IonCard>
      <IonButton>
        <span className="link loginButton">Login</span>
      </IonButton>
    </form>
      <IonButton>
        <span className="link register">Register</span>
      </IonButton>
    </div>
  )
}
