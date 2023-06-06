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
    </div>
  );
};

export default SignupPage;
