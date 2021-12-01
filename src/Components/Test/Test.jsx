import React from 'react';
import {IonAvatar } from '@ionic/react';
import NavBar from '../NavBar/NavBar';
import './test.css';

export const Test = () => (
  <>
  <div className="header">
    <div className="left"><i className="fas fa-plus add"></i> </div>
    <div className="center">dReAmSpAcE</div>
    <IonAvatar className="right">
      <img className="navImage" src="https://www.michaelburtonpdx.com/assets/headshot-removebg-preview.png" alt="user profile" />
    </IonAvatar>
  </div>
  <NavBar />
</>
);