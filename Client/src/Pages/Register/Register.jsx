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
      <div className="registerText">
        <span className="registerIMGText"> Register </span>
      <div className="registerImgContainer">
        <img className="registerLogo" src='https://static.independent.co.uk/2021/07/19/16/newFile-10.jpg?width=1200&auto=webp&quality=75'alt='dr.eam logo'/>
      </div>
      </div>
      <form className="registerForm"  >
      <IonCard className="registerContainer">
        <IonCardSubtitle className="registerTitle">
          <IonLabel className="registerLabel"> UserName</IonLabel>
          <IonInput 
            className="registerInput"
            placeHOlder="Enter UserName"
            // onIonChange={(e) => setUserName(e.target.value)}
            >
          </IonInput>
          <IonItemDivider />
          <IonLabel className="registerLabel"> Email</IonLabel>
          <IonInput 
            className="registerInput"
            placeHOlder="Enter Email"
            // onIonChange={(e) => setEmail(e.target.value)}
            >
          </IonInput>
          <IonItemDivider />
          <IonLabel className="registerLabel"> Password</IonLabel>
          <IonInput 
            className="registerInput"
            placeHOlder="Enter PassWord"
            // onIonChange={(e) => setPassword(e.target.value)}
            >
          </IonInput>
        </IonCardSubtitle>
        </IonCard>
        <IonButton>
        <span className="link  registerButton">Register</span>
      </IonButton>
      </form>
      <IonButton>
        <span className="link loginButton">Login</span>
      </IonButton>
    </div>
  )
}
