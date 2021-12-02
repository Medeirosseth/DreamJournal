import React from 'react';
import { IonBadge, IonLabel, IonCard, IonInput, IonButton } from '@ionic/react';
import Header from '../Header/Header';

import './settings.css';

export default function Settings() {
  return (
    <>
    <Header />
    <div className='settingsContainer'>
      <div className="cloudContainer">
        <span className="cloudSettings">
        Settings
          </span>
        <i class="fas fa-cloud cloud"></i>
      </div>
        <form>
          <div className='settingsFormRow1'>
            <IonLabel className='settingLabelName'>User Name:</IonLabel>
            <IonInput className='settingInputName'>@YourName </IonInput>
          </div>
          <input type="file" id='avatar' name='avatar' accept='image/png, image/jpeg'></input>
          <div className="dropdown">
            <select>
              <option>--</option>
              <option value="lightTheme">Light</option>
              <option value="darkTheme">Dark</option>
              <option value="drEamTheam">Dr.Eam</option>
              <option value="nightmareTheme">Nightmare</option>
            </select>
          </div>
          <IonButton>Save changes</IonButton>
        </form>
        <div className="settingsButton">
          <IonButton>Logout</IonButton>
          <IonButton>Feedback</IonButton>
        </div>
    </div>
    </>
  )
}
