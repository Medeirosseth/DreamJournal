import React, { useContext } from 'react'
import { IonAvatar } from '@ionic/react'
import { Context } from '../../Context/Context'
import NavBar from '../NavBar/NavBar'
import './header.css'

export default function Header() {
  const { user } = useContext((Context));
  return (
    <>
      <div className="header">
        <div className="left"></div>
        <div className="center"><i class="fas fa-cloud"></i></div>
        <div className="right"></div>
        <NavBar />
      </div>
    </>
  )
}
    
