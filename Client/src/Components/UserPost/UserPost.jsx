import React from 'react'
import { IonCard, IonText} from '@ionic/react'
import { Link } from 'react-router-dom'
import './userPost.css'


export default function UserPost({ post }) {
  return (
    <>
      <IonCard className="userPost">
        <div className="postTitle">
          <div className="postBar">
            <Link className="link" to={`/post/${post._id}`}>
              <div className="postDreamTitle">
                {post.title}
              </div>
            </Link>
            <div className="date">{new Date(post.createdAt).toDateString()}</div>
          </div>
        </div>
        <div className="postDescription"> 
          <IonText >
            {post.desc}
          </IonText>
        </div>
      </IonCard>
    </>
  )
}
