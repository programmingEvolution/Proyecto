import React from "react";
import logo from "./img/logo.png";
import left from "./img/left.png";
import house from "./img/house.png";
import caja from "./img/caja.png";
import ventas from "./img/ventas.png";
import logout from "./img/logout.png";
import grupo from "./img/grupo.png";
import clientes from "./img/clientes.png";


const Sidebar = () => {
  return (
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
        <li>
          <img src={logo} alt="Logo Julis" className="logo" />
        </li>
        <li className="active">
          <img
            style={{ float: "left" }}
            src={house}
            alt="Logo Julis"
            className="icono"
          />
          Dashboard
        </li>
        <li>
          <img
            style={{ float: "left" }}
            src={caja}
            alt="Logo Julis"
            className="icono"
          />{" "}
          Productos
        </li>
        <li>
          <img
            style={{ float: "left" }}
            src={ventas}
            alt="Logo Julis"
            className="icono"
          />
          <a href="/registro-venta.html">Ventas</a>
        </li>
        <li>
          <img
            style={{ float: "left" }}
            src={grupo}
            alt="Logo Julis"
            className="icono"
          />
          Usuarios
        </li>
        <li>
          <img
            style={{ float: "left" }}
            src={clientes}
            alt="Logo Julis"
            className="icono"
          />
          Clientes
        </li>
      </ul>
      <br />
      <br />
      <ul>
        <li className="Salir">
          <img
            style={{ float: "left" }}
            src={logout}
            alt=""
            className="icono"
          />{" "}
          Cerrar Sesión
        </li>
      </ul>

      <script src="main.js"></script>
    </div>
  );
};
export default Sidebar;
