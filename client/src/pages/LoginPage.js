import React from "react";
import Login from "../components/Login.js";
import Signup from "../components/Signup.js";
import "./../App.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function LoginPage() {
  return (
 
    <div className="App">
      <div className="LoginSignUp">
        <div className="welcome">
        <h2>Welcome,</h2>
        <h4>please login or sign up to start growing in community!</h4>
        </div>
        <Container>
          <Row>
            <Col sm={6} >
              <div>
                <Login />
              </div> 
            </Col>        
            <Col sm={6} >
              <div>
                <Signup />
              </div>
            </Col>
          </Row>
        </Container>        
        </div>
      </div>
    // </div>
  );
}
