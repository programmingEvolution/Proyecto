import React from "react";
import { Link } from "react-router-dom";
import ContenedorTitulos from "../../components/ContenedorTitulos";
import edit from "../../media/edit.png";
import { useState, useEffect } from "react";
import { obtenerVentas } from "../../utils/api";

const TablaVenta = () => {
  const [ventas, setVentas] = useState([]);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

  useEffect(() => {
    console.log("consulta", ejecutarConsulta);
    if (ejecutarConsulta) {
      obtenerVentas(
        (response) => {
          console.log("la respuesta que se recibio fue", response);
          setVentas(response.data);
        },
        (error) => {
          console.error("Salio un error:", error);
        }
      );
      setEjecutarConsulta(false);
    }
  }, [ejecutarConsulta]);

  return (
    <div>
      <section>
        <ContenedorTitulos Titulo="Gestión de Ventas" />
      </section>
      <section>
        <ul className="contenedorBotonesgrises">
          <form>
            <section>
              <label className="labelForm" htmlFor="idventa">
                Buscar venta:
              </label>
              <input
                className="inputForm"
                id="idCliente"
                placeholder="buscar venta"
                type="ID"
              ></input>
              <select className="selectForm">
                <option value=""> ID Vendedor</option>
                <option value=""> ID Cliente</option>
                <option value=""> ID Producto</option>
              </select>
            </section>
            <section className="flex-grow justify-between">
              <button className="buttonForm" type="submit">
                Buscar
              </button>
            </section>
          </form>
        </ul>
      </section>

      <section>
        <Link to="registrarventa">
          <button className="buttonForm">Nueva venta</button>
        </Link>
      </section>

      <section>
        <table>
          <thead>
            <tr>
              <th>ID Venta</th>
              <th>ID Vendedor</th>
              <th>ID cliente</th>
              <th>Productos</th>
              <th>Valor</th>
              <th>Cantidad</th>

              <th>Valor Total</th>
              <th>Fecha</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {ventas.map((venta) => (
              <tr key={venta._id}>
                <td>{venta._id}</td>
                <td>{venta.vendedor}</td>
                <td>{venta.cliente}</td>
                <td>
                  <tr>
                    {venta.productos.map((producto) => (
                      <tr>
                        <td>{producto.nombre}</td>
                      </tr>
                    ))}
                  </tr>
                </td>
                <td>
                  <tr>
                    {venta.productos.map((producto) => (
                      <tr>
                        <td>{producto.valor}</td>
                      </tr>
                    ))}
                  </tr>
                </td>
                <td>
                  <tr>
                    {venta.productos.map((producto) => (
                      <tr>
                        <td>{producto.valor}</td>
                      </tr>
                    ))}
                  </tr>
                </td>
                <td>{venta.fecha}</td>
                <td class="badge exitoso">{venta.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default TablaVenta;
