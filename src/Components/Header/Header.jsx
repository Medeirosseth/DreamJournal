import React from 'react'
import NavBar from '../NavBar/NavBar'
import './header.css'

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="left"><i className="fas fa-plus add"></i> </div>
        <div className="center">dReAmSpAcE</div>
        <div className="right">Right</div>
      </div>
      <NavBar />
    </>
  )
}
