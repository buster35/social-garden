// import { useState, useEffect } from "react"
// import { Link } from "react-router-dom";
// import { useUserContext } from "../ctx/UserContext"
import { Weather, Chat, PhotoUpload, Newsfeed, Login } from "./../components";

const HomePage = () => {
  return (
    <div className="App">
      <div className="App-home">
      <h3>Home Page</h3>
      <div className="Home-weather container">
      <Weather />
      </div>
      <div className="Home-chat">
      <Chat />
      </div>
      <div className="Home-upload">
      <PhotoUpload />
      </div>
      <div className="Home-newsfeed">
      <Newsfeed />
      </div>
    </div>
  );
};

export default HomePage;
