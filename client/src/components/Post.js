import './post.css';
import React from 'react';


const Post = ({ post: { userId, body }, index }) => {
  return (
    <div className='post-container'>
      <h4>Write a Post</h4>
      <h6>{ userId }</h6>
      <p>{ body }</p>
    </div>
  )
}

export default Post