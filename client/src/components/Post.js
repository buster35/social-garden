import "./post.css";
import React from "react";

const Post = ({ post: { username, userId, currDate, post }, index }) => {
  console.log(currDate);
  return (
    <div className="post-container">
      <h6>{username}</h6>
      {/* <h6>{ userId }</h6> */}
      <p>{currDate}</p>
      <p>{post}</p>
    </div>
  );
};

export default Post;
