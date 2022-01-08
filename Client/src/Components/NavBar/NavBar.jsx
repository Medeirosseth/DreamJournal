import React, {useContext} from 'react'
import { IonNav } from '@ionic/react'
import './navBar.css'
import { Link } from 'react-router-dom'
import { Context } from '../../Context/Context'


export default function NavBar() {
  const { dispatch} = useContext(Context)
  //user ^
  const handleLogOut = () => {
    dispatch({type: "LOGOUT"})
  }
  
  return (
    <IonNav className="navBar">
      <div className="homeLink">
        <Link className="link" to="/">
          <i class="fas fa-shapes navIcon"></i>
        </Link>
      </div>
      <div className="entries">
        <Link className="link" to="/write">
          <i class="fas fa-pen-square navIcon"></i>
        </Link>
      </div>
      <div className="logout"> 
        <i onClick={handleLogOut} class="fas fa-sign-out-alt navIcon"></i>
      </div>
      </IonNav>
      )
    }
    