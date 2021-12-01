import { IonApp } from "@ionic/react";
import Header from "./Components/Header/Header";
import { Test } from "./Components/Test/Test";
import Login from "./Login/Login";
import Home from "./Components/HomeScreen/Home";
import Entries from "./Entires/Entries";

function App() {
  return (
  <IonApp >
    <Login />
  </IonApp>
  );
}

export default App;
