import React from 'react'
import { IonButton, IonTextarea, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonToggle, IonCard } from '@ionic/react';
import './feedbackForm.css'


export default function FeedbackForm() {
  return (
    <>
      <img className='feedbackLogo' src='https://static.independent.co.uk/2021/07/19/16/newFile-10.jpg?width=1200&auto=webp&quality=75' alt='Dr. Eam logo'/>
      <IonCard>
      <form className='feedbackForm'>
        <IonInput className='feedbackEmail' placeholder= "name@email.com" required >
          Your Email: 
        </IonInput>
        <IonTextarea className='feedbackText' placeholder="Let us know what you think." spellcheck='true' required>
          Your feed back is important to us
        </IonTextarea>
        <IonButton>Submit</IonButton>
      </form>
    </IonCard>
    </>
  )
}
