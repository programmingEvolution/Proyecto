import React from "react";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <div class="toggle-btn">
        <span>
          <img
            style={{ float: "left" }}
            src="/img/left-indent.png"
            alt=""
            class="close"
          />
        </span>
      </div>
      <ul>
        <li>
          <img src="img/logo-png.png" alt="Logo Julis" class="logo" />
        </li>
        <li class="active">
          <img
            style={{ float: "left" }}
            src="img/house.png"
            alt="Logo Julis"
            class="icono"
          />
          Dashboard
        </li>
        <li>
          <img
            style={{ float: "left" }}
            src="/img/caja.png"
            alt="Logo Julis"
            class="icono"
          />{" "}
          Productos
        </li>
        <li>
          <img
            style={{ float: "left" }}
            src="/img/ventas.png"
            alt="Logo Julis"
            class="icono"
          />
          <a href="/registro-venta.html">Ventas</a>
        </li>
        <li>
          <img
            style={{ float: "left" }}
            src="/img/grupo.png"
            alt="Logo Julis"
            class="icono"
          />
          Usuarios
        </li>
        <li>
          <img
            style={{ float: "left" }}
            src="/img/clientes.png"
            alt="Logo Julis"
            class="icono"
          />
          Clientes
        </li>
      </ul>
      <br />
      <br />
      <ul>
        <li class="Salir">
          <img
            style={{ float: "left" }}
            src="/img/logout.png"
            alt=""
            class="icono"
          />{" "}
          Cerrar Sesión
        </li>
      </ul>

      <script src="main.js"></script>
    </div>
  );
};
export default Sidebar;
