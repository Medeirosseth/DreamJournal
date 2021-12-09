import React from 'react'
import { IonButton, IonTextarea, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonToggle, IonCard } from '@ionic/react';
import Header from '../Header/Header';
import './feedbackForm.css'



export default function FeedbackForm() {
  return (
    <>
      <Header />
      <form className='feedbackForm'>
        <IonInput className='feedbackEmail' placeholder= "name@email.com" required >
          Your Email: 
        </IonInput>
        <IonTextarea className='feedbackText' placeholder="Let us know what you think." spellcheck='true' required>
          Your feed back is important to us
        </IonTextarea>
        <IonButton>Submit</IonButton>
      </form>
    </>
  )
}
