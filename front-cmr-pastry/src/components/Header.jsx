import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <ul className="navbar">
          <li>
            <img className="logoGrande" src="./media/logo.png" alt="logo" />
          </li>
          <Link to ="/login">
            <li className="botonLogin">Login</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
