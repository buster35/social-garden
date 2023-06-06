import React from "react";
import Login from "../components/Login.js";
import Signup from "../components/Signup.js";
import "./../App.css";

export default function LoginPage() {
  return (
    <div className="App">
      <div className="LoginSignUp">
        <Login />
        <Signup />
      </div>
    </div>
  );
}
