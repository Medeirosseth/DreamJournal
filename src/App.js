import { IonApp } from "@ionic/react";

import EntryForm from "./Components/entryForm/EntryForm";
import Header from "./Components/Header/Header";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register"
import { Test } from "./Components/Test/Test";
import Home from "./Components/HomeScreen/Home";
import Entries from "./Entires/Entries";
import FriendEntries from "./Components/FriendEntries/FriendEntries";
import Settings from "./Components/Settings/Settings";
import FeedbackForm from "./Components/FeedbackForm/FeedbackForm";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
  <IonApp >
    <Register />
    <Home />
    <Entries/>
    <FriendEntries/>
  </IonApp>
  );
}

export default App;
