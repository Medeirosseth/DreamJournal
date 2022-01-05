import React, { useContext, useState } from 'react';
import { IonLabel, IonInput, IonButton } from '@ionic/react';
import Header from '../../Components/Header/Header';
import { Context } from '../../Context/Context';
import './settings.css';
import axios from 'axios';



export default function Settings() {
  const { user, dispatch } = useContext(Context)
  const [file, setFile] = useState(null)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.put("/users/" + user._id, updatedUser)
      } catch (err) {}
    }
  }

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
        <form onSubmit={handleSubmit}>
          <div className='settingsFormRow1'>
            <IonLabel className='settingLabelName'>User Name:</IonLabel>
            <IonInput className='settingInputName' placeholder={user.username} onIonChange={e=> setUsername(e.target.value)}></IonInput>
          </div>
          <div className='settingsFormRowOne'>
            <IonLabel className='settingLabelName'>Email:</IonLabel>
            <IonInput className='settingInputName' placeholder={user.email} onIonChange={e=> setEmail(e.target.value)}></IonInput>
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
          <IonButton className='saveChangesButton' type="submit">Save changes</IonButton>
        </form>
        <div className="settingsButton">
          <IonButton className='logOutButton' onClick={handleLogout}>logout</IonButton>
          <IonButton className='feedBackButton'>Feedback</IonButton>
        </div>
    </div>
    </>
  )
}
