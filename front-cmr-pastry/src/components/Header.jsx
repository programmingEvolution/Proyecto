import React from "react";

import logo from "./img/logo.png";
import { useAuth0 } from "@auth0/auth0-react";



const Header = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <nav>
        <ul className="navbar">
          <li>
            <img className="logoGrande" src={logo} alt="logo" />
          </li>
          <button className="botonLogin" onClick={() => loginWithRedirect()}>LogIn</button>
  
        
        </ul>
      </nav>
    </div>
  );
};

export default Header;
