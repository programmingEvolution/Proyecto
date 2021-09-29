import React from "react";

const ResgistrarProducto = () => {

  return (
      
    <div className="contenedorFormulario">
      <h2 className="text-2xl font-extrabold text-gray-800">
        Registrar nuevo producto
      </h2>
      <form className="formulario">
        <section>
          <label
            className="labelForm"
            htmlFor="idProducto"
          >
            Id Producto:
          </label>
          <input
            className="inputForm"
            id="idProducto"
            placeholder="Ingrese el id del producto"
            type="ID"
          ></input>
        </section>

        <section>
          <label className="labelForm" htmlFor="nombreProducto">
            Nombre Producto:
          </label>
          <input
            className="inputForm"
            id="nombreProducto"
            placeholder="Ingrese el nombre del producto"
            type="text"
          ></input>
        </section>

        {/*input de formulario, con formik*/}

        <section>
          <label className="labelForm" htmlFor="proveedor">
            Proveedor:
          </label>
          <input
            className="inputForm"
            id="proveedor"
            placeholder="Ingrese el nombre del proveedor del producto"
            type="text"
          ></input>
        </section>

        <section>
          <label className="labelForm" htmlFor="precioUnidad">
            Precio por unidad:
          </label>
          <input
            className="inputForm"
            id="precioUnidad"
            placeholder="Ingrese el precio por unidad del producto"
            type="number"
          ></input>
        </section>

        <section>
          <label className="labelForm" htmlFor="inventario">
            Cantidad disponible:
          </label>
          <input
            className="inputForm"
            id="inventario"
            placeholder="Ingrese La cantidad disponible del producto"
            type="number"
          ></input>
        </section>

        <section>
          <label className="labelForm" htmlFor="imagen">
            Imagen del producto:
          </label>
          <input
            className="inputForm"
            id="imagen"
            placeholder="Adjunte una imagen del producto"
            type="file"
          ></input>
        </section>

        <section>
          <button className="buttonForm" type="submit">
            Registrar
          </button>
        </section>
      </form>
    </div>
  );
};

export default ResgistrarProducto;
