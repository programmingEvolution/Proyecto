import React from "react";
import logo from "./img/logo.png";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <nav>
        <ul class="h-40 w-full bg-red-200 flex justify-between ">
          <li>
            <img className="h-32 m-4 " src={logo} alt="logo" />
          </li>
          <li>
          <button className="button-login w-20 bg-red-300 text-white rounded-lg shadow-2xl border-1 border-light-blue-500 text-center justify-center py-3 px-3 m-4 inline-flex mt-12 mr-12 bg-red-300 hover:bg-red-500" onClick={() => loginWithRedirect()}>Iniciar Sesión</button>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default Header;
