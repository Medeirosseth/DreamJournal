import React from 'react'
import { useEffect, useState} from 'react'
import NavBar from '../NavBar/NavBar'
import { useLocation } from 'react-router'
import axios from 'axios'
import './singlePost.css'
import { IonCard } from '@ionic/react'

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
    <NavBar />
    <div className="singlePost">
    <IonCard className='topCard'>
        <div className="singlePostTitle">
        {post.title}
        </div>
        <div className="singlePostInfo">
        <div className="singlePostAuthor">
        <span className="singlePostAuthor"><b>{post.username}</b></span>    
        </div>
        <div className="singlePostDate">
        <span className="singlePostDate">{new Date(post.createdAt).toDateString()} </span>
        </div>
        <div className="singlePostEditContainer">
        <i class="fas fa-edit singlePostIcon"></i>
        <i class="fas fa-minus singlePostIcon"></i>
        </div>
        </div> 
    </IonCard>
      <IonCard className="singlePostDescription">
        <p>  
          {post.desc}
        </p>
      </IonCard>
    </div>
    </>
    )
}