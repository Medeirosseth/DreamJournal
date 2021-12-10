import React from 'react'
import { IonCard, IonText} from '@ionic/react'
import { Link } from 'react-router-dom'
import './userPost.css'


export default function UserPost({ post }) {
  return (
    <>
    <div className="userPost">
      <IonCard className="userPost">
      <div className="postTitle">
        <div className="postBar">
          <Link to={`/post/${post._id}`}>
            <div className="emoji"> <i className="fas fa-cloud-rain"></i></div>
            <div className="postDreamTitle">
              {post.title}
            </div>
          </Link>
          <div className="date">{new Date(post.createdAt).toDateString()}</div>
          <div className="delete"><i className="fas fa-times"></i></div>
          </div>
        </div>
        <div className="postDescription"> 
          <IonText >
            {post.desc}
          </IonText>
        </div>
        <div className='postPrivateRow'>
        </div>
      </IonCard>
      </div>
    </>
  )
}
