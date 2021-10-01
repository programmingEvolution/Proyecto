import React from "react";

const ModificarCliente = () => {
  
  return (
      
    <div className="contenedorFormulario">
      <h2 className="text-2xl font-extrabold text-gray-800">
        Modificar datos de cliente
      </h2>
      <form className="formulario">
        <section>
          <label className="labelForm" htmlFor="idCliente">
            Id Cliente:
          </label>
          <input
            className="inputForm"
            id="idCliente"
            placeholder="Ingrese el id del cliente"
            type="ID"
          ></input>
        </section>

        <section>
          <label className="labelForm" htmlFor="nombreCliente">
            Nombre Cliente:
          </label>
          <input
            className="inputForm"
            id="nombreCliente"
            placeholder="Ingrese el nombre del cliente"
            type="text"
          ></input>
        </section>

        <section>
          <label className="labelForm" htmlFor="telefono">
            Telefono:
          </label>
          <input
            className="inputForm"
            id="telefono"
            placeholder="Ingrese el nombre del telefono del cliente"
            type="text"
          ></input>
        </section>

        <section>
          <label className="labelForm" htmlFor="email">
            e-mail:
          </label>
          <input
            className="inputForm"
            id="email"
            placeholder="Ingrese el e-mail del cliente"
            type="number"
          ></input>
        </section>

        <section className="flex flex-grow  justify-around">
          <button className="buttonForm" type="submit">
            Guardar
          </button>

          <button className="buttonForm"  type="button">
            Cancelar
          </button>
        </section>
      </form>
    </div>
  );
};

export default ModificarCliente;