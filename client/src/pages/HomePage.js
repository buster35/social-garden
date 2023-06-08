// import { useState, useEffect } from "react"
// import { Link } from "react-router-dom";
// import { useUserContext } from "../ctx/UserContext"
import { Container } from "react-bootstrap";
import { Weather, Chat, PhotoUpload, Newsfeed, WritePost, Login } from "./../components";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  return (
    <div className="App">
      <div className="App-home">
      <h3>Home Page</h3>
        <Container>
          <div className="write-post"><WritePost /></div>
          <div className="Home-upload"><PhotoUpload /></div>
          <div className="Home-newsfeed"><Newsfeed /></div>
        </Container>
        <Container>
          <div className="Home-weather container"><Weather /></div>
          <div className="Home-chat"><Chat /></div>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
