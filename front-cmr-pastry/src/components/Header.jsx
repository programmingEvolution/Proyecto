import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <ul class="navbar">
          <li>
            <img class="logoGrande" src="./media/logo.png" alt="logo" />
          </li>
          <Link to ="/login">
            <li class="botonLogin">Login</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
