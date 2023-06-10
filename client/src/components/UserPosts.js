import React from "react";

import Post from "./Post";


function UserPosts({ feed }) {
  console.log(feed);


  return (
    <div className="UserPosts-container">
      <h5>Your Posts</h5>
      {feed.map((post, index) => (
        <Post key={index} index={index} post={post} />
      ))}
    </div>
  );
}

export default UserPosts;