import { IonApp } from "@ionic/react";

import EntryForm from "./Components/entryForm/EntryForm";
import Header from "./Components/Header/Header";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register"
import { Test } from "./Components/Test/Test";
import Home from "./Components/HomeScreen/Home";
import Entries from "./Entries/Entries";
import FriendEntries from "./Components/ZFriendEntries.txt/FriendEntries";
import Settings from "./Components/Settings/Settings";
import FeedbackForm from "./Components/FeedbackForm/FeedbackForm";
import NavBar from "./Components/NavBar/NavBar";
import UserEntry from "./Components/UserEntry/UserEntry";

function App() {
  return (
  <IonApp >
    <Entries />

  </IonApp>
  );
}

export default App;
