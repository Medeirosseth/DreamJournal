import { IonAvatar } from '@ionic/react'
import React from 'react'
import NavBar from '../NavBar/NavBar'
import './header.css'

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="left"><i className="fas fa-plus add"></i> </div>
<<<<<<< HEAD:src/Components/Header/Header.jsx
        <div className="center"><i class="fas fa-cloud"></i></div>
=======
        <div className="center"><i class="fas fa-cloud cloud"></i></div>
>>>>>>> FriendEntryStretchGoal:Client/src/Components/Header/Header.jsx
        <IonAvatar className="right">
          <img className="navImage" src="https://www.itsecurityguru.org/wp-content/uploads/2016/01/cloudman.jpg" alt="user profile" />
        </IonAvatar>
      </div>
      <NavBar />
    </>
  )
}
