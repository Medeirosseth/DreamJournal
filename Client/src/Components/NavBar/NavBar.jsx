import React from 'react'
import { IonBadge } from '@ionic/react'
import './navBar.css'
import { Link } from 'react-router-dom'


//Figure out what is necessary for nav bar 
// Logout / settings / dreams / write / entries 
export default function NavBar() {
  return (
    <div className="navBar">
      <div className="home">
        <Link className="link" to="/">
          <i class="fas fa-home navIcon"></i>
        </Link>
      </div>
      <div className="entries">
        <Link className="link" to="/write">
          <i class="fas fa-pen-square navIcon"></i>
        </Link>
      </div>
      <div className="dictionary"> 
        <Link className="link" to="/posts">
          <i class="far fa-newspaper navIcon"></i>
        </Link>
      </div>
      <div className="settings"><IonBadge color="primary"></IonBadge> </div>
    </div>
  )
}
