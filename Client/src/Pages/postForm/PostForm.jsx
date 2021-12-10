import React from 'react'
import { IonButton, IonTextarea, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonToggle, IonCard } from '@ionic/react';

import './postForm.css';
import Header from '../../Components/Header/Header';

export default function PostForm() {
  return (
    <>
    <Header />
    <IonCard>
      <form className='postForm'>
        <IonInput className='postTitle' placeholder= "I could Fly" spellcheck='true' required >
          Title:
        </IonInput>
        <IonTextarea className='postText' placeholder="Last night I dreamt that I was able to fly. What did I do with my new powers you ask?" spellcheck='true' required>
          The Dream:
        </IonTextarea>
        <div className="emojis"> 
          <span id='Happy'><i className="fas fa-sun"></i></span>
          <span id='Nightmare'><i className="fas fa-book-dead"></i></span>
          <span id='Sexy'><i className="far fa-grin-stars"></i></span>
          <span id='Sad'><i className="fas fa-cloud-rain"></i></span>
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
