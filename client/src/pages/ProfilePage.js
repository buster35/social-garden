import React from 'react'
import { useUserContext } from "../ctx/UserContext"
import { useState, useEffect } from "react"
import { Weather, Chat, PhotoUpload, UserPosts } from "../components";

export default function ProfilePage() {

  // const { currUser } = useUserContext()
  // console.log(currUser)
  // console.log(currUser.status)

  // useEffect(() => {
  //   if( currUser?.status !== "found" ){
  //     window.location.href = "/login"
  //   }
  // }, [])
  const { currUser } = useUserContext();
  const [userPosts, setUserPosts] = useState([]);

  const checkForPosts = async () => {
    console.log("reloading the posts");
    try {
      const resp = await fetch(`/api/post/all/${currUser.data._id}`);
      const result = await resp.json();
      console.log(result);
      if (result.status === "success") {
        console.log(result.payload);
        setUserPosts(result.payload);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    console.log(currUser);
    checkForPosts();
  }, []);

  return (
    <div className='App'>
      <div className="App.profile">
        <h1>Profile</h1>

        <div className='Profile.weather.container'>
        <Weather />
        </div>
        <div className='Profile.chat.container'>
        <Chat />
        </div>
        {/* <div className='Profile.upload.container'>
        <PhotoUpload />
        </div> */}
        <div className='Profile-posts'>
        <UserPosts feed={userPosts} />
        </div>
      </div>
    </div >
  )
}
