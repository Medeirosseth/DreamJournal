import React from 'react'
import "./posts.css"
import UserPost from '../UserPost/UserPost'

export default function Posts({ posts }) {
  return (
    <>
      <div className="posts">
        {posts.map((p) => (
          <UserPost post={p} />
        ))}
      </div>
    </>
    
  )
}
