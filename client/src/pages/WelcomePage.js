// Simple welcome page for users without accounts to be brought to before entering the full site.
// Will have redirects to login page.
// Mostly used for flair.
// Could either have a big picture on the left-side, with a button that links to log-in on the right.
// Or it could be a picture of the website proper on the left, instead of a big picture.
// Should include the navbar the same as all the other pages, so no worries there.
// Could add Amy's name logo in the front page as well!
import React from 'react';
import './WelcomePage.css';
import socialGarden from '../components/socialgarden.png'

const WelcomePage = () => {
  function handleSignupLogin() {
    window.location.href = '/login';
  }
  return (
    <div>
      <div className="welcome-image">
        <img src={socialGarden} alt="Top Image" />
      </div>
      <div className="split-page">
        <div className="left-side">
          <img src="" alt="Image" />
        </div>
        <div className="right-side">
          <button className="signup-login" onClick={handleSignupLogin}>
            Signup/Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
