import React from "react";
import { Link } from "react-router-dom";
import styled from "./nav.module.css"
const Nav = () => {
  return (
    <div className={styled.navContainer}>
      <ul className={styled.navUlEle}>
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/add">Add Products</Link>
        </li>
        <li>
          <Link to="/update">Update Products</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/SignUp">SignUp</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
