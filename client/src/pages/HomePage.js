// import { useState, useEffect } from "react"
// import { Link } from "react-router-dom";
// import { useUserContext } from "../ctx/UserContext"
import { Weather, Chat, PhotoUpload, Newsfeed, Login } from "./../components";
import Container from 'react-bootstrap/Container';

const HomePage = () => {
  return (
    <div className="App">
      <div className="App-home">
        <h3>Home Page</h3>
          <Container>
            <Row>
              <Col lg={true}></Col>
                <div className="Home-upload"><PhotoUpload /></div>
                <div className="Home-newsfeed"><Newsfeed /></div>
            </Row>
          </Container>
        <div className="Home-weather container">
          <Weather />
        </div>
        <div className="Home-chat">
          <Chat />
        </div>

      </div>
    </div>
  );
};

export default HomePage;
