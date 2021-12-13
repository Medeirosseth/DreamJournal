import React from 'react'
import { IonButton, IonTextarea, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonToggle, IonCard } from '@ionic/react';

import './postForm.css';
import Header from '../../Components/Header/Header';

export default function PostForm() {
  return (
    <>
    <Header />
    <div className="PostForm"> 
      <IonCard>
        <form className='postForm'>
          <IonInput className='postTitle' placeholder= "I could Fly" spellcheck='true' required >
            Title:
          </IonInput>
          <IonTextarea className='postText' placeholder="Last night I dreamt that I was able to fly. What did I do with my new powers you ask?" spellcheck='true' required>
            The Dream:
          </IonTextarea>
          <div className="emojis"> 
            <span id='Nightmare'><i className="fas fa-book-dead dreamCategories"></i></span>
            <span id='Sad'><i className="fas fa-cloud-rain dreamCategories"></i></span>
            <span id='Sexy'><i className="far fa-grin-stars dreamCategories"></i></span>
            <span id='Happy'><i className="fas fa-sun dreamCategories"></i></span>
            </div>
          <div className='privateRow'>
            <IonLabel>
              <i class="fas fa-eye privacyToggle"></i>
            </IonLabel>
            <IonToggle />
            <IonLabel>
              <i class="far fa-eye-slash privacyToggle"></i>
            </IonLabel>
          </div>
          <IonButton className="postFormButton">BUTTON</IonButton>
        </form>
      </IonCard> 
    </div>
    </>
  )
}
