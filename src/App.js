import { IonApp } from "@ionic/react";
import EntryForm from "./Components/entryForm/EntryForm";
import Header from "./Components/Header/Header";
import { Test } from "./Components/Test/Test";
import Login from "./Login/Login";

function App() {
  return (
  <IonApp >
    <Header />
    <EntryForm/>
  </IonApp>
  );
}

export default App;
