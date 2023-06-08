import "./writepost.css";
import React from "react";
import { useState } from "react";

const WritePost = () => {
  // const currUser = useUserContext();
  const [postText, setPostText] = useState("");
  const [formData, setFormData] = useState({});

  // const handleInputChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  // console.log(formData)

  return (
    <div className="writePost">
      <form>
        <label for="writePost">Write a Post</label>
        <input
          className="postText"
          name="postText"
          type="text"
          value={formData.postText}
          // onChange={handleInputChange}
          rows={3}
        ></input>
        <button
          className="postButton btn btn-secondary"
          // onClick={handleFormSubmit}
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default WritePost;
