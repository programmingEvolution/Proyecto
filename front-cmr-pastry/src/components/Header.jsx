import React from "react";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";

const Header = () => {
  return (
    <div>
      <nav>
        <ul className="navbar">
          <li>
            <img className="logoGrande" src={logo} alt="logo" />
          </li>
          <Link to="/login">
            <li className="botonLogin">Login</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
