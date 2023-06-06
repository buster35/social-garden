import React from "react";
import Login from "../components/Login.js";
import Signup from "../components/Signup.js";
import "./../App.css";

export default function LoginPage() {
  return (
    <div className="App">
      <div className="LoginSignUp">
        <div className="welcome">
        <h2>Welcome,</h2>
        <h4>please login or sign up to start growing in community!</h4>
        </div>
        <div className="component-container">
          <div className="login col-6">
        <Login />
        </div>
        <div className="signup col-6">
        <Signup />
        </div>
        </div>
      </div>
    </div>
  );
}
