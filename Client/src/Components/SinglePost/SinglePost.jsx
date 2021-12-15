import React from 'react'
import { useEffect, useState} from 'react'
import Header from '../Header/Header'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './singlePost.css'
import { IonCard, IonItem } from '@ionic/react'

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
        <div className="singlePostTitle"> 
        <h1 className="singlePostTitle">
        {post.title}
        </h1>
        </div>
        <div className="editContainer">
        <i class="fas fa-edit singlePostIcon"></i>
        <i class="fas fa-minus singlePostIcon"></i>
        </div>
      <div className="singlePostInfo">
      <span className="singlePostAuthor"><b>{post.username}</b></span>    
      <span className="singlePostDate">{new Date(post.createdAt).toDateString()} </span>
      </div>
      <IonCard>
      <p className="singlePostDescription">
        {post.desc}
        </p>
        </IonCard>
      </div>
    </div>
    </>
  )
}
