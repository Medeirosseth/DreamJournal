import { IonAvatar } from '@ionic/react'
import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import './header.css'

let user = true

//IS having the ternary for user avatar necessary?

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="left">
          <Link className="link" to="/write">
            <i className="fas fa-plus add"></i> 
          </Link>
        </div>
        <div className="center"><i className="fas fa-cloud"></i></div>
        <IonAvatar className="right">
          {
            user ? (  
              <Link to="/settings"> 
                <img className="navImage" src="https://www.itsecurityguru.org/wp-content/uploads/2016/01/cloudman.jpg" alt="user profile" />
              </Link>
            ) : (
              <>
              <Link className="link" to="/login">LOGIN</Link>
              <Link className="link" to="/register">REGISTER</Link>
              </>
            )
          }
        </IonAvatar>
      </div>
      <NavBar />
    </>
  )
}
