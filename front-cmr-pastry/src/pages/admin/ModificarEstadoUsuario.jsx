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
      modificarProducto: false,
      modificarUsuario: false,
      añadirProducto: false,
      añadirUsuario: false,
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
            <option>Autorizado</option>
            <option>No autorizado</option>
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

        <h4 className="text-2xl font-extrabold text-gray-800 pb-10 py-10 ml-10">
          Permisos de usuario
        </h4>

        <section>
          <label className="labelForm" htmlFor="modificarProducto">
            Modificar Productos:{" "}
          </label>

          <input
            className="inputcheck"
            type="checkbox"
            id="modificarProducto"
            onChange={formik.handleChange}
            value={formik.values.modificarProducto}
          />
          <label className="labelcheck">{`${formik.values.modificarProducto}`}</label>
        </section>

        <section>
          <label className="labelForm" htmlFor="añadirProducto">
            Añadir Productos:{" "}
          </label>

          <input
            className="inputcheck"
            type="checkbox"
            id="añadirProducto"
            onChange={formik.handleChange}
            value={formik.values.añadirProducto}
          />
          <label className="labelcheck">{`${formik.values.añadirProducto}`}</label>
        </section>
        <section>
          <label className="labelForm" htmlFor="modificarUsuario">
            Modificar Usuarios:{" "}
          </label>

          <input
            className="inputcheck"
            type="checkbox"
            id="modificarUsuario"
            onChange={formik.handleChange}
            value={formik.values.modificarUsuario}
          />
          <label className="labelcheck">{`${formik.values.modificarUsuario}`}</label>
        </section>

        <section className="">
          <label className="labelForm" htmlFor="añadirUsuario">
            Añadir Usuarios:{" "}
          </label>

          <input
            className="inputcheck"
            type="checkbox"
            id="añadirUsuario"
            onChange={formik.handleChange}
            value={formik.values.añadirUsuario}
          />
          <label className="labelcheck">{`${formik.values.añadirUsuario}`}</label>
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
