import React from "react";
import { Link } from "react-router-dom";
import ContenedorTitulos from "../../components/ContenedorTitulos";
import edit from "../../media/edit.png";

const TablaVenta = () => {
  return (
    <div className="contenedorFormulario">
      <section>
        <ContenedorTitulos Titulo="Ventas" />
      </section>
      <div className="ContenedorconMargen">
        <form className="contenedor">
          <select className="selección">
            <option value=""> ID Vendedor</option>
            <option value=""> ID Cliente</option>
            <option value=""> ID Producto</option>
          </select>

          <section className="buscar">
            <input placeholder="Buscar una Venta" />
            <i className="fas fa-search botonGenerico iconoBusqueda"></i>
          </section>
        </form>
        <section>
          <ul className="Diseño">
            <li>
              <Link to="/modificarventa">
                <button className="modificarBoton">Modificar Venta</button>
              </Link>
            </li>
            <li>
              <Link to="/registrarventa">
                <button className="nuevaVentBoton">Nuevo Venta</button>
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <table>
            <tr>
              <th>ID Pedido</th>
              <th>ID Usurario</th>
              <th>ID clientes</th>
              <th>Factura de Venta</th>
              <th>Factura de Pago</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Valor Total</th>
              <th>Estado</th>
              <th>Editar</th>
            </tr>
            <tr>
              <td>1000</td>
              <td>1034567689</td>
              <td>1002345956</td>
              <td>N001</td>
              <td>N002</td>
              <td>Torta en esperial de maracuyá</td>
              <td>2</td>
              <td>74000</td>
              <td>
                <span class="badge exitoso">Finalizada</span>
              </td>
              <td>
                <Link to="/modificarventa">
                  <span>
                    <img class="icono" src={edit} alt="Editar" />
                  </span>
                </Link>
              </td>
            </tr>
            <tr>
              <td>1001</td>
              <td>52345567</td>
              <td>1016567132</td>
              <td>N002</td>
              <td>N0043</td>
              <td>Casecicle</td>
              <td>20</td>
              <td>80000</td>
              <td>
                <span class="badge exitoso">Finalizada</span>
              </td>
              <td>
                <Link to="/modificarventa">
                  <span>
                    <img class="icono" src={edit} alt="Editar" />
                  </span>
                </Link>
              </td>
            </tr>
            <tr>
              <td>1045</td>
              <td>52345567</td>
              <td>100334567</td>
              <td>N0673</td>
              <td>N013</td>
              <td>Chocolates Relleños</td>
              <td>200</td>
              <td>1000000</td>
              <td>
                <span class="badge exitoso">Finalizada</span>
              </td>
              <td>
                <Link to="/modificarventa">
                  <span>
                    <img class="icono" src={edit} alt="Editar" />
                  </span>
                </Link>
              </td>
            </tr>
            <tr>
              <td>1300</td>
              <td>1089345678</td>
              <td>792345245</td>
              <td>N0034</td>
              <td>N1345</td>
              <td>Muffins Grandes</td>
              <td>40</td>
              <td>160000</td>
              <td>
                <span class="badge pendiente">En despacho</span>
              </td>
              <td>
                <Link to="/modificarventa">
                  <span>
                    <img class="icono" src={edit} alt="Editar" />
                  </span>
                </Link>
              </td>
            </tr>
          </table>
        </section>
      </div>
    </div>
  );
};

export default TablaVenta;
