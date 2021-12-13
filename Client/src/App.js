import React, {useState, useEffect, Fragment} from 'react'
import { IonApp } from "@ionic/react";
import Register from "./Pages/Register/Register";
import Login from './Pages/Login/Login';
import Home from "./Pages/HomeScreen/Home";
import Posts from "./Components/Posts/Posts";
import PostForm from './Pages/postForm/PostForm';
import Settings from './Pages/Settings/Settings';
import Header from './Components/Header/Header';

import FeedbackForm from './Pages/FeedbackForm/FeedbackForm';
import { BrowserRouter as Router, Routes, Switch, Route, Link} from "react-router-dom";

 import axios from 'axios'
import UserPost from './Components/UserPost/UserPost';
import SinglePost from './Components/SinglePost/SinglePost';

function App() {

  const user = false;
  // NEED TO MAKE A SINGLE POST
  return (
    <Router> 
      <IonApp >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register"> {user ? <Home/> : <Register />} </Route>
          <Route path="/login"> {user ? <Home/> : <Login />} </Route>
          <Route path="/write"> {user ? <PostForm/> : <Register />} </Route>
          <Route path="/settings"> {user ? <Settings/> : <Register />} </Route>
          <Route path="/post/:id">
            <SinglePost />
          </Route>
        </Switch>
      </IonApp>
    </Router>
  );
}

export default App;





{/* <Router>
    <Fragment>
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route  path="/register">
          <Register />
        </Route>
        <Route  path="/login">
          <Login />
        </Route>
        <Route  path="/write">
          <PostForm />
        </Route>
        <Posts posts={posts}/> */}
