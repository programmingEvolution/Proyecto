import React from "react";
import logo from "./img/logo.png";
import left from "./img/left.png";
import house from "./img/house.png";
import caja from "./img/caja.png";
import ventas from "./img/ventas.png";
import logout from "./img/logout.png";
import grupo from "./img/grupo.png";
import clientes from "./img/clientes.png";
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <nav className="hidden sm:flex sm:w-72 border border-gray-300 h-full flex-col bg-gray-200 p-4 sidebar">
      <div id="sidebar">
        <div className="toggle-btn">
          <span>
            <img
              style={{ float: "left" }}
              src={left}
              alt=""
              className="close"
            />
          </span>
        </div>
        <ul>
          <Link to="/">
            <li>
              <img src={logo} alt="Logo Julis" className="logo" />
            </li>
          </Link>
          <Link to="/">
            <li className="active">
              <img
                style={{ float: "left" }}
                src={house}
                alt="Logo Julis"
                className="icono"
              />
              Dashboard
            </li>
          </Link>
          <Link to="/">
            <li>
              <img
                style={{ float: "left" }}
                src={caja}
                alt="Logo Julis"
                className="icono"
              />{" "}
              Productos
            </li>
          </Link>
          <Link to="/tablaventas">
            <li>
              <img
                style={{ float: "left" }}
                src={ventas}
                alt="Logo Julis"
                className="icono"
              />
              <a href="/registro-venta.html">Ventas</a>
            </li>
          </Link>
          <Link to="">
          <li>
            <img
              style={{ float: "left" }}
              src={grupo}
              alt="Logo Julis"
              className="icono"
            />
            Usuarios
          </li>
          </Link>
          <Link to="/">
          <li>
            <img
              style={{ float: "left" }}
              src={clientes}
              alt="Logo Julis"
              className="icono"
            />
            Clientes
          </li>
          </Link>
        </ul>
        <br />
        <br />
        <ul>
          <Link to="/">
          <li className="Salir">
            <img
              style={{ float: "left" }}
              src={logout}
              alt=""
              className="icono"
            />{" "}
            Cerrar Sesión
          </li>
          </Link>
        </ul>

        <script src="main.js"></script>
      </div>
    </nav>
  );
};
export default Sidebar;