import Swal from "sweetalert2";
import React from "react";
import { useFormik } from "formik";

const ModificarEstadoUsuario = () => {
  const formik = useFormik({
    //valores iniciales para formulario con formik
    initialValues: {
      idUsuario: "12345",
      rolUsuario: "",
      estadoUsuario: "",
    },

    //Validacion de datos de formulario con yup

    //Enviar valores

    onSubmit: (values) => {
      console.log("enviando..");
      console.log(values);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "El usuario ha sido modificado",
        timer: 1500,
      });
    },
  });

  return (
    <div className="contenedorFormulario">
      <h2 className="text-2xl font-extrabold text-gray-800">
        Modificar Usuario
      </h2>
      <form className="formulario" onSubmit={formik.handleSubmit}>
        <section>
          <label className="labelForm" htmlFor="idUsuario">
            Id Usuario:
          </label>
          <input
            className="inputForm"
            id="idUsuario"
            placeholder="Ingrese el id del Usuario"
            type="ID"
            value={formik.values.idUsuario}
          ></input>
        </section>

        <section>
          <label className="labelForm" htmlFor="estadoUsuario">
            Estado del usuario:
          </label>
          <select
            className="selectForm"
            id="estadoUsuario"
            onChange={formik.handleChange}
            value={formik.values.estadoUsuario}
          >
            <option>En espera</option>
            <option>Activo</option>
          </select>
        </section>

        <section>
          <label className="labelForm" htmlFor="rolUsuario">
            Rol del usuario:
          </label>
          <select
            className="selectForm"
            id="rolUsuario"
            onChange={formik.handleChange}
            value={formik.values.rolUsuario}
          >
            <option>Sin asignar</option>
            <option>Vendedor</option>
            <option>Administrador</option>
          </select>
        </section>

        <section className="flex flex-grow  justify-around">
          <button className="buttonForm" type="submit">
            Guardar
          </button>
          <button className="buttonForm" type="button">
            Cancelar
          </button>
        </section>
      </form>
      
    </div>
  );
};

export default ModificarEstadoUsuario;
