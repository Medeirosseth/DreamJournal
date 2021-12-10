import React, {useState, useEffect, Fragment} from 'react'
import { IonApp } from "@ionic/react";
import Register from "./Pages/Register/Register";
import Login from './Pages/Login/Login';
import Home from "./Pages/HomeScreen/Home";
import Posts from "./Components/Posts/Posts";
import PostForm from './Pages/postForm/PostForm';
import Settings from './Components/Settings/Settings';

import FeedbackForm from './Pages/FeedbackForm/FeedbackForm';
import { BrowserRouter as Router, Routes, Switch, Route, Link} from "react-router-dom";

 import axios from 'axios'
import UserPost from './Components/UserPost/UserPost';

function App() {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    const fetchPosts = async ()=>{
    const res = await axios.get("/posts")
    setPosts(res.data)
    console.log(res.data)
  }
  fetchPosts()
  },[])

  const user = false

  return (
    <IonApp >
      <Login />
    </IonApp>
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
