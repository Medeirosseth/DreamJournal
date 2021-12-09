import { IonApp } from "@ionic/react";

import EntryForm from "./Components/entryForm/EntryForm";
import Header from "./Components/Header/Header";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register"
import { Test } from "./Components/Test/Test";
<<<<<<< HEAD:src/App.js
import Settings from "./Components/Settings/Settings";
import FeedbackForm from "./Components/FeedbackForm/FeedbackForm";
import NavBar from "./Components/NavBar/NavBar";
=======
import Register from "./Pages/Register/Register";
import Home from "./Components/HomeScreen/Home";
import Entries from "./Entires/Entries";
import FriendEntries from "./Components/FriendEntries/FriendEntries";
>>>>>>> FriendEntryStretchGoal:Client/src/App.js

function App() {
  return (
  <IonApp >
<<<<<<< HEAD:src/App.js
    <NavBar />
=======
    <Register />
    <Home />
    <Entries/>
    <FriendEntries/>
>>>>>>> FriendEntryStretchGoal:Client/src/App.js
  </IonApp>
  );
}

export default App;
