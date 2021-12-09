import React, {useState, useEffect} from 'react'
import { IonApp } from "@ionic/react";
import Register from "./Pages/Register/Register";
import Home from "./Components/HomeScreen/Home";
import Posts from "./Posts/Posts";
import PostForm from './Pages/postForm/PostForm';

 import axios from 'axios'

function App() {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    const fetchPosts = async ()=>{
    const res = await axios.get("/posts")
    setPosts(res.data)
  }
  fetchPosts()
  },[])

  return (
  <IonApp >
    <Register />
    <Home />
    <Posts posts={posts}/>
    <PostForm />
  </IonApp>
  );
}

export default App;
