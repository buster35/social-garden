// import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import {
  Weather,
  Chat,
  PhotoUpload,
  Newsfeed,
  WritePost,
  Login,
  PhotoGallery,
} from "./../components";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { useUserContext } from "../ctx/UserContext";

const HomePage = () => {
  const { currUser } = useUserContext();
  const [newsFeed, setNewsFeed] = useState([]);

  const checkForPosts = async () => {
    console.log("reloading the posts");
    try {
      const resp = await fetch(`/api/post/all/`);
      const result = await resp.json();
      console.log(result);
      if (result.status === "success") {
        console.log(result.payload);
        setNewsFeed(result.payload);
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
    <div className="App">
      <div className="App-home" style={{ backgroundColor: "#132a13" }}>
        <h3 className="Home-header">Home Page</h3>
        <Container>
          <Row>
            <Col 
              sm={8}
              style={{
                backgroundColor: "##183618",
                padding: "20px",
              }}
            >
              <div className="write-post">
                <WritePost reloadPosts={checkForPosts} />
              </div>
              <div className="Home-upload">
                <PhotoUpload />
              </div>
              <div className="Home-newsfeed">
                <Newsfeed feed={newsFeed} />
              </div>
            </Col>
            <Col
              style={{
                backgroundColor: "#132a13",
                padding: "20px",
              }}
            >
              <div>
                <Weather />
              </div>
              <div className="Home-chat">
                <Chat />
              </div>
              <div>
                <PhotoGallery />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
