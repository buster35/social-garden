import './post.css';
import React from 'react';


const Post = ({ post: { userName, userId, body }, index }) => {
  return (
    <div className='post-container'>
      <h6>{ userName }</h6>
      <h6>{ userId }</h6>
      <p>{ body }</p>
    </div>
  )
}

export default Post