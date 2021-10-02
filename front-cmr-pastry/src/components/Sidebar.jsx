import React from "react";
import logo from "./img/logo.png";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <div className="toggle-btn">
        <span>
          <img
            style={{ float: "left" }}
            src="/img/left-indent.png"
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
            src="img/house.png"
            alt="Logo Julis"
            className="icono"
          />
          Dashboard
        </li>
        <li>
          <img
            style={{ float: "left" }}
            src="/img/caja.png"
            alt="Logo Julis"
            className="icono"
          />{" "}
          Productos
        </li>
        <li>
          <img
            style={{ float: "left" }}
            src="/img/ventas.png"
            alt="Logo Julis"
            className="icono"
          />
          <a href="/registro-venta.html">Ventas</a>
        </li>
        <li>
          <img
            style={{ float: "left" }}
            src="/img/grupo.png"
            alt="Logo Julis"
            className="icono"
          />
          Usuarios
        </li>
        <li>
          <img
            style={{ float: "left" }}
            src="/img/clientes.png"
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
            src="/img/logout.png"
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
