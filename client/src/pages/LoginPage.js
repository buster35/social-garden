import React from "react";
import Login from "../components/Login.js";
import Signup from "../components/Signup.js";

export default function LoginPage() {
  return (
    <div className="LoginSignUp">
      <Login />
      <Signup />
    </div>
  );
}
