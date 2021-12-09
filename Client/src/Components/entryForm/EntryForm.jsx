import React from 'react'
import { IonButton, IonTextarea, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonToggle, IonCard } from '@ionic/react';

import './entryForm.css';

export default function EntryForm() {
  return (
    <>
    <IonCard>
      <form className='entryForm'>
        <IonInput className='entryTitle' placeholder= "I could Fly" spellcheck='true' required >
          Title:
        </IonInput>
        <IonTextarea className='entryText' placeholder="Last night I dreamt that I was able to fly. What did I do with my new powers you ask?" spellcheck='true' required>
          The Dream:
        </IonTextarea>
        <div className="emojis"> 
          <span id='Happy'>😃</span>
          <span id='Nightmare'>👻</span>
          <span id='Sexy'>🍆</span>
          <span id='Weird'>🧐 </span>
        </div>
        <div className='privateRow'>
          <IonLabel>Private</IonLabel>
          <IonToggle />
          <IonLabel>Public</IonLabel>
        </div>
        <IonButton>Post</IonButton>
      </form>
    </IonCard> 
    </>
  )
}
