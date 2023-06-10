import './post.css';
import React from 'react';


const Post = ({ post: { userName, userId, currDate, post }, index }) => {
  console.log( userName)
  return (
    <div className='post-container'>
      <h6>{ userName }</h6>
      {/* <h6>{ userId }</h6> */}
      <p>{ currDate }</p>
      <p>{ post }</p>
    </div>
  )
}

export default Post