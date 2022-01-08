import React from 'react'
import NavBar from '../NavBar/NavBar'
import './header.css'

export default function Header() {
  // const { user } = useContext((Context));
  return (
    <>
      <div className="header">
        <div className="left"></div>
        <div className="center"><i class="fas fa-cloud navCloud"></i></div>
        <div className="right"></div>
        <NavBar />
      </div>
    </>
  )
}
    
