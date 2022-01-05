import React from 'react'
import { IonButton, IonTextarea, IonInput, IonLabel } from '@ionic/react';
import Header from '../../Components/Header/Header';
import './feedbackForm.css'



export default function FeedbackForm() {
  return (
    <>
    <Header />
      <div className="feedBack"> 
        <div className="feedBackContainer"> 
          <form className='feedbackForm'>
            <div className="cloudContainer"> 
              <span className="cloudFeedBack">FEEDBACK</span>
              <i className="fas fa-cloud cloud"></i>
            </div>
            <div className="inputRow1">
            
              <IonLabel>Email:</IonLabel> 
              <IonInput className='feedbackEmail' placeholder= "name@email.com" required >
              </IonInput>
            </div>
            <div className="inputRow2">
              <IonLabel className="inputRow2Title" >Message...</IonLabel>
              <IonTextarea className='feedbackText' spellcheck='true' required>
              </IonTextarea>
            </div>  
            <IonButton>Submit</IonButton>
          </form>
        </div>
      </div>
    </>
  )
}
