import React, {useContext} from 'react'
import { useEffect, useState} from 'react'
import NavBar from '../NavBar/NavBar'
import { useLocation } from 'react-router'
import axios from 'axios'
import './singlePost.css'
import { IonCard, IonButton } from '@ionic/react'
import { Context } from '../../Context/Context'

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [updateMode, setUpdateMode] = useState(false)
  const { user } = useContext(Context)

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path)
      setPost(res.data)
      setTitle(res.data.title)
      setDesc(res.data.desc)
    }; 
    getPost()
  }, [path]);


  const handleDelete = async () => {
    try {
    await axios.delete(`/posts/${post._id}`, { 
    data: { username:user.username },
    });
    setUpdateMode(false)
    } catch (err) {}
  }

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, { 
        username:user.username,
        title, 
        desc ,
      });
      window.location.reload();
      } catch (err) {}
  }
console.log(post.username === user.username)
  return (
    <>
    <NavBar />
    <div className="singlePost">
    <IonCard className='topCard'>
      {updateMode ? ( 
        <input 
          type="text" 
          value={title} 
          className="singlePostTitleInput"
          onChange={(e) => setTitle(e.target.value)}
          /> 
          ) : (
        <> 
          <div className="singlePostTitle">
            { title}
          </div>
          <div className="singlePostInfo">
            <div className="singlePostAuthor">
              <span className="singlePostAuthor"><b>{post.username}</b></span>    
            </div>
            <div className="singlePostDate">
              <span className="singlePostDate">{new Date(post.createdAt).toDateString()} </span>
            </div>
              <div className="singlePostEditContainer">
                <i class="fas fa-edit singlePostIcon" onClick={setUpdateMode}></i>
                <i class="fas fa-minus singlePostIcon" onClick={handleDelete}></i>
              </div>
          </div> 
          </>
        )}
          </IonCard>
          { updateMode ? ( 
            <> 
              <textarea 
                value={desc} 
                className='singlePostDescriptionInput'
                onChange={(e) =>setDesc(e.target.value)}
                />
                <IonButton 
                  color="dark" 
                  className="singlePostButton"
                  onClick={handleUpdate}
                  >update</IonButton>
             </>
          ) : (    
          <IonCard className="singlePostDescription">
            <p>  
              {post.desc}
            </p>
          </IonCard>
        )}
      
    </div>
    </>
    )
}