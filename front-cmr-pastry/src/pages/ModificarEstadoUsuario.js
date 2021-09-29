import React from "react";

const ModificarEstadoUsuario = () => {
  return (
    <div className="contenedorFormulario">
      <h2 className="text-2xl font-extrabold text-gray-800">
        Modificar Usuario
      </h2>
      <form className="formulario">
          
        <section>
          <label className="labelForm" htmlFor="estadoUsuario">Estado del usuario:</label>
          <select className="selectForm" id="estadoUsuario">
            <option>En espera</option>
            <option>Activo</option>
          </select>
        </section>

        <section>
          <label className="labelForm" htmlFor="rolUsuario">Rol del usuario:</label>
          <select className="selectForm" id="rolUsuario">
            <option>Sin asignar</option>
            <option>Vendedor</option>
            <option>Administrador</option>
          </select>
        </section>

        <section>
          <button className="buttonForm" type="submit">Enviar</button>
        </section>
      </form>
    </div>
  );
};

export default ModificarEstadoUsuario;
