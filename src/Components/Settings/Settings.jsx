import React from 'react';
import { IonBadge, IonCard, IonInput, IonButton } from '@ionic/react';

import './settings.css';

export default function Settings() {
  return (
    <div className='settingsContainer'>
      <img className='settingsLogo' src='https://static.independent.co.uk/2021/07/19/16/newFile-10.jpg?width=1200&auto=webp&quality=75' alt='Dr. Eam logo'/>
      <IonCard>
        <form>
          <IonInput>User Name </IonInput>
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
      </IonCard>
      
    </div>
  )
}
