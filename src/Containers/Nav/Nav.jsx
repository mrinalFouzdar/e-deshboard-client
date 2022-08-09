import React from "react";
import { Link } from "react-router-dom";
import styled from "./nav.module.css"
import {Navbar,Container ,Nav} from "react-bootstrap"
import { useEffect } from "react";
import { useState } from "react";
const Navbarcomponent = () => {
  const auth = localStorage.getItem("user")
  const [authstate,setAuthState]=useState(false)
  useEffect(()=>{
    setAuthState(auth)
  },[auth])

  return (
    <Navbar expand="lg"  className={styled.navContainer}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          Desboard
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Products</Nav.Link>
          <Nav.Link as={Link} to="/add">Add Product</Nav.Link>
          <Nav.Link as={Link} to="/update">Update</Nav.Link>
          <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
          {authstate ?
          <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
          :
          <Nav.Link as={Link} to="/signUp">SignUp</Nav.Link>
           }
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarcomponent;
