import { IonApp } from "@ionic/react";
import Header from "./Components/Header/Header";
import { Test } from "./Components/Test/Test";
import Login from "./Login/Login";
import Home from "./Components/HomeScreen/Home";

function App() {
  return (
  <IonApp >
    <Header />
    <Home />
  </IonApp>
  );
}

export default App;
