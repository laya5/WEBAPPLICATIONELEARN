import React from "react";
import logo from "../../../assets/images/logo3.png";
import { Link } from "react-router-dom";

const Logo = () => (
  <Link to="/">
    <img src={logo} alt="brand logo" style={{ height: 120, width: 150}} />
  </Link>
);

export default Logo;
