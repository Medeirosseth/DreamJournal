import React from 'react'
import { useEffect, useState} from 'react'
import Header from '../Header/Header'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './singlePost.css'

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({})

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path)
      setPost(res.data)
    }; 
    getPost()
  }, [path]);
  return (
    <>
    <Header />
    <div className="singlePost">
      <div className="singlePostWrapper">
        <h1 className="singlePostTitle">
          {post.title}
          <div className="editContainer">
          <i class="fas fa-edit singlePostIcon"></i>
          <i class="fas fa-minus singlePostIcon"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor"><b>{post.username}</b></span>
          <span className="singlePostDate"> {post.desc}</span>
        </div>
        <p className="singlePostDescription">
          
        </p>
      </div>
    </div>
    </>
  )
}
