import { IonApp } from "@ionic/react";
import Header from "./Components/Header/Header";
import { Test } from "./Components/Test/Test";
import Register from "./Pages/Register/Register";
import Home from "./Components/HomeScreen/Home";
import Entries from "./Entires/Entries";

function App() {
  return (
  <IonApp >
    <Entries />
  </IonApp>
  );
}

export default App;
