import React from "react";
import "./newsfeed.css";
import Post from "./Post";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import { useUserContext } from "../ctx/UserContext";

function Newsfeed({ feed }) {
  console.log(feed);
  // const [allPosts, setNewsFeed] = useState([]);
  // const { currUser } = useUserContext();

  // const checkForPosts = async () => {
  //   try {
  //     const resp = await fetch(`/api/post/all/${currUser.data.username}`);
  //     const result = await resp.json();
  //     if (result.status === "success") {
  //       console.log(result.payload);
  //       setNewsFeed(result.payload);
  //     }
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };

  // useEffect(() => {
  //   checkForPosts();
  // }, [currUser]);

  return (
    <div>
      <h5>Newsfeed</h5>
    <div className="newsfeed-container">
      
      {feed.map((post, index) => (
        <Post key={index} index={index} post={post} />
      ))}
    </div>
    </div>
  );
}

export default Newsfeed;

// const allPosts = [
//   {
//     userName: `Larry`,
//     userId: 1,
//     currDate: `06/09/2023`,
//     post: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias esse architecto pariatur velit consequatur eaque est quos, saepe maxime optio sapiente ea. At unde quod iusto dignissimos sunt perferendis id, provident voluptatem mollitia deserunt ipsam voluptates nisi dolorum cupiditate maxime.`,
//     // optional image upload here
//   },
//   {
//     userName: `Jill`,
//     userId: 2,
//     currDate: `06/09/2023`,
//     post: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias esse architecto pariatur velit consequatur eaque est quos, saepe maxime optio sapiente ea. At unde quod iusto dignissimos sunt perferendis id, provident voluptatem mollitia deserunt ipsam voluptates nisi dolorum cupiditate maxime.`,
//     // optional image upload here
//   },
//   {
//     userName: `Kim`,
//     userId: 3,
//     currDate: `06/09/2023`,
//     post: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias esse architecto pariatur velit consequatur eaque est quos, saepe maxime optio sapiente ea. At unde quod iusto dignissimos sunt perferendis id, provident voluptatem mollitia deserunt ipsam voluptates nisi dolorum cupiditate maxime.`,
//     // optional image upload here
//   },
// ];
