import { useEffect } from "react"
// import { Link } from "react-router-dom";
import { useUserContext } from "../ctx/UserContext"
import { Container } from "react-bootstrap";
import { Weather, Chat, PhotoUpload, Newsfeed, WritePost, Login } from "./../components";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomePage = () => {

  // const { currUser } = useUserContext()
  // console.log(currUser)
  // console.log(currUser.status)

  // useEffect(() => {
  //   if( currUser?.status !== "found" ){
  //     window.location.href = "/login"
  //   }
  // }, [])

  return (
    <div className="App">
      <div className="App-home">
      <h3>Home Page</h3>
        <Container>
        <Row>
          
          <Col xs={8} style={{ backgroundColor:'#DAD7CD', padding: '20px', margin: '20px' }}>
              <div className="write-post"><WritePost /></div>
              <div className="Home-upload"><PhotoUpload /></div>
              <div className="Home-newsfeed"><Newsfeed /></div>
          </Col>
        
          <Col style={{ backgroundColor:'#A3B18A', padding: '20px', margin: '20px' }}>
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
