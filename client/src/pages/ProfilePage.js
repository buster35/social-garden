import React from 'react'
import { useUserContext } from "../ctx/UserContext"
import { useEffect } from "react"
import { Weather, Chat, PhotoUpload } from "../components";

export default function ProfilePage() {

  // const { currUser } = useUserContext()
  // console.log(currUser)
  // console.log(currUser.status)

  // useEffect(() => {
  //   if( currUser?.status !== "found" ){
  //     window.location.href = "/login"
  //   }
  // }, [])

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
        <div className='Profile.upload.container'>
        <PhotoUpload />
        </div>

      </div>
    </div >
  )
}
