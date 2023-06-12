import React from 'react'
import { useUserContext } from "../ctx/UserContext"
import { useState, useEffect } from "react"
import { Weather, Chat, PhotoUpload, UserPosts } from "../components";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
      <div className="App-home" style={{ backgroundColor: "#132a13" }}>
        <h3 className="Home-header">My Profile</h3>
        <Container>
          <Row>
            <Col 
              sm={8}
              style={{
                backgroundColor: "##183618",
                padding: "20px",
              }}
            >
              <div className='Profile-posts'>
                <UserPosts feed={userPosts} />
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

            </Col>
          </Row>
        </Container>
      </div>
    </div >
  )
}
