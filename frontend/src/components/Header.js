import React from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header(props) {
  // Destructure any properties that were set in userReducers slice.reducers
  const { userInfo, error, loading } = useSelector((state) => state.userLogin || {});
  console.log(userInfo);
  console.log(error);
  console.log(loading);
  const logoutHandler = () => {
    console.log("logoutHandler");
  };

  return (
    <Navbar bg="light" expand="sm" id="navbarBlur" sticky="top">
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse id="navbar">
        <div className="ms-md-auto pe-md-3 d-flex align-items-center"></div>
        <NavDropdown
          title={
            <>
              {<img className="navbar-avatar" src={userInfo.avatar} alt="User Avatar" />}
              {userInfo.first_name || userInfo.username}
            </>
          }
          id="dropdownMenuButton1"
          align="end"
        >
          <NavDropdown.Item as={Link} to="/profile">
            <span className="pg-icon">
              <i className="fa fa-user"></i>
            </span>
            <span>Profile</span>
          </NavDropdown.Item>
          {/* <NavDropdown.Item as={Link} to="/subscriptions/subscription_details">
          <span className="pg-icon">
            <i className="fa fa-repeat"></i>
          </span>
          <span>Manage Subscription</span>
        </NavDropdown.Item> */}
          <NavDropdown.Item as={Link} to="/changePassword">
            <span className="pg-icon">
              <i className="fa fa-unlock-alt"></i>
            </span>
            <span>Change Password</span>
          </NavDropdown.Item>
          <NavDropdown.Item onClick={logoutHandler}>
            <span className="pg-icon">
              <i className="fa fa-sign-out"></i>
            </span>
            <span>Sign Out</span>
          </NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  );
}
