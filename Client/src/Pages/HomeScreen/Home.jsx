import React, { useState, useEffect } from 'react'
import './home.css'
import axios from 'axios'
import Posts from '../../Components/Posts/Posts'
import NavBar from '../../Components/NavBar/NavBar'

export default function Home() {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    const fetchPosts = async ()=>{
    const res = await axios.get("/posts")
    setPosts(res.data)
    console.log(res.data)
  }
  fetchPosts()
  },[])

  return (
    <>
      <NavBar />
      <div className="home">
        <Posts posts={posts}/>
      </div>

    </>
    )
  }