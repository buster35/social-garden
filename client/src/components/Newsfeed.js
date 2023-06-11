import React from "react";
import "./newsfeed.css";
import Post from "./Post";
import "bootstrap/dist/css/bootstrap.min.css";

function Newsfeed({ feed }) {
  return (
    <div>
      <h5>Newsfeed</h5>
      <div className="newsfeed-container">
        {feed.map((post, index) => (
          <Post key={index} index={index} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Newsfeed;
