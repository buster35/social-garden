// Simple welcome page for users without accounts to be brought to before entering the full site.
// Will have redirects to login page.
// Mostly used for flair.
// Could either have a big picture on the left-side, with a button that links to log-in on the right.
// Or it could be a picture of the website proper on the left, instead of a big picture.
// Should include the navbar the same as all the other pages, so no worries there.
// Could add Amy's name logo in the front page as well!
import React from 'react'
import "./WelcomePage.css"

const WelcomePage = () => {
  function handleSignupLogin() {
    window.location.href = "/login";
  }  
  return (
    <div>
      <div class="split-page">
        <div class="left-side">
          <img src="image.jpg" alt="Image" />
        </div>
        <div class="right-side">
          <button class="signup-login" onclick={handleSignupLogin}>Signup/Login</button>
        </div>
      </div>
    </div>
  )
}

export default WelcomePage;