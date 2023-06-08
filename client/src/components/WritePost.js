import './writepost.css'
import React from 'react';
import {useState} from "react";
import { useUserContext } from "../ctx/UserContext"

const WritePost = () => {
  const currUser = useUserContext();
  const [postText, setPostText] = useState("");
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    e.preventDefault()
    setPostText({ ...postText, [e.target.name]: e.target.value });
  };
  console.log(postText, currUser)
  
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    if (!currUser) return console.log("error");
    const path= `api/post`
    try {
      const resp = await fetch(path, {
        method: "post",
        body: {
          post: JSON.stringify(postText),
          username: currUser.data.username,
          currDate: Date.now,
          userId: currUser.data._id
        },
        headers: {
          "Content-Type": "application/json"
        }
    });
    const result = await resp.jon()
    console.log(result)
    } catch(error) {
      console.log("error")}

}

  return (
    <div className="writePost">
      <form>
      <label for="writePost">Write a Post</label>
        <input className= "postText" name= "postText" type="text" value= {formData.postText} onChange= {handleInputChange} rows={3}>
        </input>
        <button className="postButton btn btn-secondary" type="submit">Post</button>
      </form>
    </div>
  );
};

export default WritePost;
