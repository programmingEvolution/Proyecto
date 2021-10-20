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
          <li>
          <button className="button-login" onClick={() => loginWithRedirect()}>Iniciar Sesión</button>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default Header;
