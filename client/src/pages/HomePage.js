// import { useState, useEffect } from "react"
// import { Link } from "react-router-dom";
// import { useUserContext } from "../ctx/UserContext"
import { Weather, Chat, PhotoUpload} from "./../components"
const HomePage = () => {


  return (
    <div className= 'App'>
      <h1>Home Page</h1>
      < Weather />
      < Chat />
      < PhotoUpload />
    </div >
  )
}

export default HomePage