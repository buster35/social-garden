import React from 'react';
import './newsfeed.css';
import Post from './Post';


function Newsfeed() {
  const allPosts = [
    {
      userName: `Larry`,
      userId: 1,
      body: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias esse architecto pariatur velit consequatur eaque est quos, saepe maxime optio sapiente ea. At unde quod iusto dignissimos sunt perferendis id, provident voluptatem mollitia deserunt ipsam voluptates nisi dolorum cupiditate maxime.`
      // optional image upload here
    },
    {
      userName: `Jill`,
      userId: 2,
      body: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias esse architecto pariatur velit consequatur eaque est quos, saepe maxime optio sapiente ea. At unde quod iusto dignissimos sunt perferendis id, provident voluptatem mollitia deserunt ipsam voluptates nisi dolorum cupiditate maxime.`
      // optional image upload here
    },
    {
      userName: `Kim`,
      userId: 3,
      body: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias esse architecto pariatur velit consequatur eaque est quos, saepe maxime optio sapiente ea. At unde quod iusto dignissimos sunt perferendis id, provident voluptatem mollitia deserunt ipsam voluptates nisi dolorum cupiditate maxime.`
      // optional image upload here
    }
  ]

  return (
      <div className="newsfeed-container">
      <h5>Newsfeed</h5>
      {allPosts.map((post, index) => (
        <Post key={index} index={index} post={post} />
      ))};
      </div>
  );
}

export default Newsfeed