import { IonCard, IonCardContent, IonLabel, IonText } from '@ionic/react'
import Header from '../Header/Header'
import React from 'react'
import "./posts.css"
import UserPost from '../UserPost/UserPost'

export default function Posts({ posts }) {
  return (
    <>
    <Header />
    <div className="Posts">
      {posts.map((p) => (
        <UserPost post={p} />
      ))}
    </div>
    
    
    </>
    
  )
}
