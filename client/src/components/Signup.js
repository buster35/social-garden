import "./signup.css";
import { useState } from "react";

const SignupPage = (props) => {
  const defForm = { username: "", email: "", password: "" };
  const [formData, setFormData] = useState(defForm);
  const [signupResult, setSignupResult] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Log out lines 17 - 32 in order to bypass checks
    // if (formData.password.length < 6 || formData.password.length > 20) {
    //   setSignupResult("Password must be between 6 and 20 characters");
    //   return;
    // }

    // const passwordRegex = /^(?=.*[A-Z])(?=.*\d).*$/;
    // if (!passwordRegex.test(formData.password)) {
    //   setSignupResult("Password must contain at least one capital letter and one number");
    //   return;
    // }


    // const emailRegex = (?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]);


    // if (!emailRegex.test(formData.email)) {
    //   setSignupResult("Invalid email address");
    //   return;
    // }

    const query = await fetch("/api/user", {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!query.ok) {
      setSignupResult("fail");
    } else {
      const result = await query.json();
      if (result.status === "success" && result.payload) {
        window.location.href = "/";
      }
    }
  };

  return (
    <div style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}>
      <h1>Signup Page</h1>

      <form className="form mb-3">
        <div className="form-group mb-3">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="John"
            className="form-control"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group mb-3">
          <label>Email Address</label>
          <input
            type="text"
            name="email"
            placeholder="john@gmail.com"
            className="form-control"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group mt-2">
          <button className="btn btn-primary" onClick={handleFormSubmit}>
            Sign Me Up!
          </button>
        </div>
      </form>

      {signupResult === "fail" && (
        <div className="alert alert-danger" role="alert">
          Signup failed!
        </div>
      )}

      {signupResult === "Password must be between 6 and 20 characters" && (
        <div className="alert alert-danger" role="alert">
          Password must be between 6 and 20 characters!
        </div>
      )}

      {signupResult === "Password must contain at least one capital letter and one number" && (
        <div className="alert alert-danger" role="alert">
          Password must contain at least one capital letter and one number
        </div>
      )}

      {signupResult === "Invalid email address" && (
        <div className="alert alert-danger" role="alert">
          Invalid email address
        </div>
      )}

    </div>
  );
};

export default SignupPage;
