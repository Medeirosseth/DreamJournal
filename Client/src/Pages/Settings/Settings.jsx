import React, { useContext } from 'react';
import { IonBadge, IonLabel, IonCard, IonInput, IonButton } from '@ionic/react';
import Header from '../../Components/Header/Header';
import { Context } from '../../Context/Context';
import './settings.css';



export default function Settings() {
  const { user, dispatch } = useContext(Context)

  const handleLogout = () => {
    dispatch({type: "LOGOUT"})
  };
  
  return (
    <>
    <Header />
    <div className='settingsContainer'>
      <div className="cloudContainer">
        <span className="cloudSettings">
        Settings
          </span>
        <i className="fas fa-cloud cloud"></i>
      </div>
        <form>
          <div className='settingsFormRow1'>
            <IonLabel className='settingLabelName'>User Name:</IonLabel>
            <IonInput className='settingInputName'>@YourName </IonInput>
          </div>
          <div className='settingsFormRow2'>
            <IonLabel className='settingLabelPhoto'>Profile Photo:</IonLabel>
            <input  className='avatar' type="file" id='avatar' name='avatar' accept='image/png, image/jpeg'></input>
          </div>
          <div className='settingsFormRow3'>
          <IonLabel className='settingLabelTheme'>Choose Theme:</IonLabel>
            <div className="dropdown">
              <select>
                <option>--</option>
                <option value="lightTheme">Light</option>
                <option value="darkTheme">Dark</option>
                <option value="drEamTheam">Dr.Eam</option>
                <option value="nightmareTheme">Nightmare</option>
              </select>
            </div>
          </div>
          <IonButton className='saveChangesButton'>Save changes</IonButton>
        </form>
        <div className="settingsButton">
          <IonButton className='logOutButton' onClick={handleLogout}>logout</IonButton>
          <IonButton className='feedBackButton'>Feedback</IonButton>
        </div>
    </div>
    </>
  )
}
