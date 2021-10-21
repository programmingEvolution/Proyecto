import React from "react";

import ContenedorTitulos from "../../components/ContenedorTitulos";
import edit from "../../media/edit.png";
import eliminar from "../../media/eliminar.png";
import { Link } from "react-router-dom";
import { useUser } from "../../context/userContext";
import { useState } from "react";
import { useEffect } from "react";
import { obtenerProductos } from "../../utils/api";
import { obtenerUsuarios } from "../../utils/api";

const RegistrarVenta = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [productos, setProductos] = useState([]);
  const [ejecutarConsultaProductos, setEjecutarConsultaProductos] =
    useState(true);
  const [ejecutarConsultaUsuarios, setEjecutarConsultaUsuarios] =
    useState(true);

  useEffect(() => {
    console.log("consulta", ejecutarConsultaProductos);
    if (ejecutarConsultaProductos) {
      obtenerProductos(
        (response) => {
          console.log("la respuesta que se recibio fue", response);
          setProductos(response.data);
        },
        (error) => {
          console.error("Salio un error:", error);
        }
      );
      setEjecutarConsultaProductos(false);
    }
  }, [ejecutarConsultaProductos]);

  useEffect(() => {
    console.log("consulta", ejecutarConsultaUsuarios);
    if (ejecutarConsultaUsuarios) {
      obtenerUsuarios(
        (response) => {
          console.log("la respuesta que se recibio fue", response);
          setUsuarios(response.data);
        },
        (error) => {
          console.error("Salio un error:", error);
        }
      );
      setEjecutarConsultaUsuarios(false);
    }
  }, [ejecutarConsultaUsuarios]);

  return (
    <div>
      <section>
        <ContenedorTitulos Titulo="Modificar Ventas" />
      </section>

      <form>
        <section className="flex flex-col">
          <div className="field boton fecha">
            <label className="fecha" form="">
              Fecha de venta
            </label>
            <input className="fecha" type="date" required />
          </div>
          <div className="field large">
            <label for="">Id Cliente:</label>
            <input
              className="inputForm"
              type="number"
              placeholder="Ingrese el id del cliente"
              required
            />
          </div>

          <div className="field large">
            <label for="vendedor">ID Vendedor:</label>
            <select className="inputForm" name="vendedor" type="text" required>
              {" "}
              {usuarios.map((el) => {
                return <option value={el._id}>{el.idUsuario}</option>;
              })}
            </select>
          </div>
          <div className="field">
            <label form="">Producto:</label>
            <select className="inputForm" type="text" required onChange>
              {productos.map((el) => {
                return <option value={el._id}>{el.nombreProducto}</option>;
              })}
            </select>
            <button>Agregar</button>
          </div>

          <section><input
              className="inputForm"
              type="number"
              placeholder="Ingrese el id del cliente"
              required
            /></section>
        </section>
        <section>
          <table className="ventas">
            <thead>
              <tr>
                <th>ID Producto</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {/* {venta.productos.map((producto) => (
              <tr>
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.cantidad}</td>
                <td>{producto.valor}</td>
                <td>
                  <span>
                    <img class="icono" src={edit} alt="Editar" />
                    <img class="icono" src={eliminar} alt="" />
                  </span>
                </td>
              </tr>
            ))} */}
            </tbody>
          </table>
        </section>
        <div>
          <button>
            <a class="add" href="">
              {" "}
              Guardar
            </a>
          </button>
        </div>
      </form>
    </div>
  );
};
export default RegistrarVenta;
