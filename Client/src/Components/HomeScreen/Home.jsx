import React from 'react'
import { IonCard, IonCardContent, IonInput, IonAvatar } from '@ionic/react'
import './home.css'

export default function Home() {
  return (
    <>
    <div className="header">
      <div className="left"><i className="fas fa-plus add"></i> </div>
      <div className="center"><i class="fas fa-cloud cloud"></i></div>
      <IonAvatar className="right">
        <img className="navImage" src='https://www.itsecurityguru.org/wp-content/uploads/2016/01/cloudman.jpg' alt="user profile" />
      </IonAvatar>
      </div>
    <IonCard className="homePage">
      <IonCardContent className="welcome"> Welcome Seth </IonCardContent>
      <div className="profilePhoto">
        <img className="userPic" src='https://www.itsecurityguru.org/wp-content/uploads/2016/01/cloudman.jpg' alt="user profile" />
      </div>
      <IonCardContent className="dreamFact">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.
        
      </IonCardContent>
      <IonInput />
    </IonCard>
    </>
  )
}
