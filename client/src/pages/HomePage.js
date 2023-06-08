// import { useState, useEffect } from "react"
// import { Link } from "react-router-dom";
// import { useUserContext } from "../ctx/UserContext"
import { Container } from "react-bootstrap";
import { Weather, Chat, PhotoUpload, Newsfeed, WritePost, Login } from "./../components";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomePage = () => {
  return (
    <div className="App">
      <div className="App-home">
      <h3>Home Page</h3>
        <Container>
        <Row>
          <div style={{ borderColor:'2px solid green', padding: '20px' }}>
          <Col className="col-1" xs={8}>
            <div className="write-post"><WritePost /></div>
            <div className="Home-upload"><PhotoUpload /></div>
            <div className="Home-newsfeed"><Newsfeed /></div>
          </Col>
          </div>
          <Col className="col-2">
            <div className="Home-weather container"><Weather /></div>
            <div className="Home-chat"><Chat /></div>
          </Col>
        </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
