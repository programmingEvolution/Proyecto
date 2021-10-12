import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import React from "react";
import ContenedorTitulos from "../../components/ContenedorTitulos";


const ResgistrarCliente = () => {

  const formik = useFormik({
    //valores iniciales para formulario con formik
    initialValues: {
      idCliente: "",
      nombreCliente: "",
     telefono: "",
      email: "",
  
    },

    //Validacion de datos de formulario con yup
    validationSchema: Yup.object({
      idCliente: Yup.string().required("El id es obligatorio"),
      nombreCliente: Yup.string().required("El nombre es obligatorio"),
    }),

    //Enviar valores

    onSubmit: (values) => {
      console.log("enviando..");
      console.log(values);

      //alerta de swal al agregar producto

      Swal.fire({
        position: "center",
        icon: "success",
        title: "El cliente ha sido registrado",
        timer: 1500,
      });
    },
  });


  return (

    <div className="contenedorFormulario">
      <section>
              <ContenedorTitulos Titulo = "Registrar cliente"/>
          </section>

      <form className="formulario" onSubmit={formik.handleSubmit}>
        <section>
          <label className="labelForm" htmlFor="idCliente">
            Id Cliente:
          </label>
          <input
            className="inputForm"
            id="idCliente"
            placeholder="Ingrese el id del cliente"
            type="ID"
            onChange={formik.handleChange}
            value={formik.values.idCliente}
          ></input>
        </section>

        {/* validación con yup para que no deje el campo vacio */}
        {formik.touched.idCliente && formik.errors.idCliente ? (
          <div className="mensaje">
            <p className="p">Error</p>
            <p>{formik.errors.idCliente}</p>
          </div>
        ) : null}

        <section>
          <label className="labelForm" htmlFor="nombreCliente">
            Nombre Cliente:
          </label>
          <input
            className="inputForm"
            id="nombreCliente"
            placeholder="Ingrese el nombre del cliente"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.nombreCliente}
          ></input>
        </section>

        {/* validación con yup para que no deje el campo vacio */}
        {formik.touched.nombreCliente && formik.errors.nombreCliente ? (
          <div className="mensaje">
            <p className="p">Error</p>
            <p>{formik.errors.nombreCliente}</p>
          </div>
        ) : null}

        <section>
          <label className="labelForm" htmlFor="telefono">
            Telefono:
          </label>
          <input
            className="inputForm"
            id="telefono"
            placeholder="Ingrese el nombre del telefono del cliente"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.telefono}
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
            onChange={formik.handleChange}
            value={formik.values.email}
          ></input>
        </section>
        <section className="flex flex-grow  justify-around">
          <button className="buttonForm" type="submit">
            Registrar
          </button>
          <button className="buttonForm"  type="button">
            Cancelar
          </button>
        </section>
      </form>
    </div>
  );
};

export default ResgistrarCliente;
