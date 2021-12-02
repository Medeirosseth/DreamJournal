import React from 'react'
import { IonBadge } from '@ionic/react'
import './navBar.css'

export default function NavBar() {
  return (
    <div className="navBar">
      <div className="home">Home</div>
      <div className="entries">Entries</div>
      <div className="dictionary"> Dictionary </div>
      <div className="settings"><IonBadge color="primary"></IonBadge> </div>
    </div>
  )
}
