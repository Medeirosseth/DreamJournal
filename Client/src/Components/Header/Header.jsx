import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IonAvatar } from '@ionic/react'
import { Context } from '../../Context/Context'
import NavBar from '../NavBar/NavBar'
import './header.css'

export default function Header() {
  const { user } = useContext((Context));
  return (
    <>
      <div className="header">

        <div className="left"><i className="fas fa-plus add"></i> </div>
        <div className="center"><i class="fas fa-cloud"></i></div>
        <div className="left">
        </div>
        <div className="center">
          <i className="fas fa-cloud headerIcon"></i>
        </div>
        <IonAvatar className="right">
        {
          user ? (  
            ""
            ) : (
              <>
              <Link className="link" to="/login">LOGIN</Link>
              <Link className="link" to="/register">REGISTER</Link>
              </>
              )
        }
            </IonAvatar>
            </div>
      
    </>
  )
}
