import React, { useState, useEffect, useContext } from 'react'
import './home.css'
import axios from 'axios'
import Posts from '../../Components/Posts/Posts'
import NavBar from '../../Components/NavBar/NavBar'
import { Context } from '../../Context/Context'



export default function Home() {
  const { user } = useContext(Context)
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    const fetchPosts = async ()=>{
    if (user){
      const res = await axios.get(`/posts/?user=${user.username}`)
      setPosts(res.data)
    } else {
      const res = await axios.get(`/posts`)
      setPosts(res.data)

    }
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