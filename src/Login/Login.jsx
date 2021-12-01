import React from 'react'
// import { Link } from 'react-router-dom'
import {IonInput, IonCard, IonLabel, IonCardHeader, IonCardSubtitle, IonItemDivider, IonButton } from '@ionic/react'
import './login.css'

export default function login() {
  return (
    <div className="logIn">
      <div className="loginImgContainer"> 
        <img className="loginLogo" src='https://static.independent.co.uk/2021/07/19/16/newFile-10.jpg?width=1200&auto=webp&quality=75'alt='dr.eam logo'/>
      </div>
      <form className="loginForm">
      <IonCard className="container"> 
      <IonCardSubtitle className="loginTitle">LOG IN</IonCardSubtitle>
        <IonLabel>Email</IonLabel>
        <IonInput className="username" placeholder="username"></IonInput>
        <IonItemDivider />
        <IonLabel>PassWord</IonLabel>
        <IonInput className="password" placeholder="password"></IonInput>
      </IonCard>
      <IonButton>
      <span className="link">Login</span>
    </IonButton>
    </form>
      <IonButton>
        <span className="link">Register</span>
      </IonButton>
    </div>
  )
}
