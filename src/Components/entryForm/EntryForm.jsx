import React from 'react'
import { IonButton, IonTextarea, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider } from '@ionic/react';


export default function EntryForm() {
  return (
    <>
    <div>
      
    </div>
    <form>
      <IonInput placeholder= "Title">Title:</IonInput>
      <IonTextarea placeholder="Your dream"> some text and shit!</IonTextarea>
      <IonButton>Submit</IonButton>
    </form>
    </>
  )
}
