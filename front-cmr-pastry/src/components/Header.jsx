import React from "react";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";

const Header = () => {
  return (
    <div>
      <nav>
        <ul class="h-40 w-full bg-red-200 flex justify-between ">
          <li>
            <img className="h-32 m-4 " src={logo} alt="logo" />
          </li>
          <Link to="/login">
            <li className ="w-20 bg-red-300 text-white rounded-lg shadow-2xl border-1 border-light-blue-500 text-center justify-center py-3 px-3 m-4 inline-flex mt-12 mr-12 bg-red-300 hover:bg-red-500">Login
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
