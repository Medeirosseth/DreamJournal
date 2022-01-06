import React, { useContext} from 'react'
import { IonApp } from "@ionic/react";
import Register from "./Pages/Register/Register";
import Login from './Pages/Login/Login';
import Home from "./Pages/HomeScreen/Home";
import Header from "./Components/Header/Header.jsx";
import PostForm from './Pages/postForm/PostForm';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Context } from './Context/Context';
import SinglePost from './Components/SinglePost/SinglePost';

function App() {

  const { user } = useContext(Context);
  
  return (
    <Router >     
      <Header />
      <IonApp >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register"> {user ? <Home/> : <Register />} </Route>
          <Route path="/login"> {user ? <Home/> : <Login />} </Route>
          <Route path="/write"> {user ? <PostForm/> : <Register />} </Route>
          <Route path="/post/:id">
            <SinglePost />
          </Route>
        </Switch>
      </IonApp>
    </Router>
    );
  }
  
  export default App;
  
  
  // <Route path="/settings"> {user ? <Settings/> : <Register />} </Route>

