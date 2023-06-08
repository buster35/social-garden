import "./header.css";
import { useState } from "react";
import { useUserContext } from "../ctx/UserContext";
import { Navbar, Nav } from "react-bootstrap";
import gardenlogo from "./gardenlogo.png";
import socialgarden from "./socialgarden.png";

const Header = () => {
  const { currUser, logout } = useUserContext();
  console.log(window.location.pathname);
  return (
    <header className="pb-0 mb-0" style={{ borderBottom: "1px solid #333" }}>
      {/* <section> */}
      <img
        className="gardenlogo"
        src={gardenlogo}
        alt="Logo of a growing plant"
      />
      <img
        className="socialgarden"
        src={socialgarden}
        alt="name of the application in cursive writing"
      />
      {/* </section> */}

      <Navbar expand="md" style={{ justifyContent: "space-between" }}>
        <div className="container-fluid" style={{ width: "65%" }}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Add the activeKey code below and the rest should work  */}
            <Nav className="me-auto" activeKey={window.location.pathname}>
              <li>
                <Nav.Link href="/">Home</Nav.Link>
              </li>
              {currUser.status === "notfound" && (
                <>
                  <li>
                    <Nav.Link href="/login">Login Page</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                  </li>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
        <div style={{ width: "35%", paddingRight: "10px" }}>
          {currUser.status === "found" && (
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <li className="nav-item">
                <span className="nav-link active">
                  Welcome back, {currUser.data.username}
                </span>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  onClick={logout}
                  style={{ cursor: "pointer" }}
                >
                  Logout
                </a>
              </li>
            </ul>
          )}
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
