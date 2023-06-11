import "./writepost.css";
import React from "react";
import { useState } from "react";
import { useUserContext } from "../ctx/UserContext";
import Button from 'react-bootstrap/Button';

const WritePost = ({ reloadPosts }) => {
  const { currUser } = useUserContext();
  const [postText, setPostText] = useState("");
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    e.preventDefault();
    setPostText({ ...postText, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!currUser) return console.log("error");

    const postObj = {
      post: postText.postText,
      username: currUser.data.username,
      userId: currUser.data._id,
    };

    try {
      const resp = await fetch("/api/post", {
        method: "post",
        body: JSON.stringify(postObj),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await resp.json();
      console.log(result);
      reloadPosts();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="writePost">
      <form>
        <label htmlFor="writePost">Write a Post</label>
        <input
          className="postText"
          name="postText"
          type="text"
          value={formData.postText}
          onChange={handleInputChange}
          rows={3}
        ></input><br></br><br></br>
        <Button
          onClick={handleFormSubmit}
          variant="light"
          type="submit"
        >
          Post
        </Button>
      </form>
    </div>
  );
};

export default WritePost;
