import React from 'react'
import {IonInput, IonCard, IonItemDivider} from '@ionic/react'
import './login.css'

export default function login() {
  return (
    <IonCard className="container"> 
      <IonInput className="username" placeholder="username"></IonInput>
      <IonInput className="password" placeholder="password"></IonInput>
    </IonCard>
  )
}
