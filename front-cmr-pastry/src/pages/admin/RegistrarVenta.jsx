import React from "react";

import ContenedorTitulos from "../../components/ContenedorTitulos";
import edit from "../../media/edit.png";
import eliminar from "../../media/eliminar.png";
import { Link } from "react-router-dom";

const RegistrarVenta = () => {
  return (
    <div>
      <h2 className="dash-title">Registrar Venta</h2>

      <form>
        <div className="field large">
          <label for="">Id Cliente:</label>
          <input
            className="inputForm"
            type="number"
            placeholder="Ingrese el id del cliente"
            required
          />
        </div>
        <div className="field">
          <label for="">Producto:</label>
          <input className="inputForm" type="text" required />
        </div>
        <div className="field large">
          <label for="vendedor">ID Vendedor:</label>
          <input className="inputForm" name="vendedor" type="number" required />
        </div>
        <div className="field short">
          <label for="">Cantidad:</label>
          <input className="inputForm" type="number" required />
        </div>

        <div className="field">
          <input className="boton" type="submit" value="Agregar Producto" />
        </div>

        <section>
          <label className="labelForm" htmlFor="estadoUsuario">
            Estado de venta:
          </label>
          <select className="selectForm" id="estadoUsuario">
            <option>En proceso</option>
            <option>Finalizada</option>
            <option>Despachada</option>
          </select>
        </section>
      </form>

      <div className="field boton fecha">
        <label className="fecha" for="">
          Fecha de venta
        </label>
        <input className="fecha" type="date" required />

        <button>
          <a class="add" href="">
            {" "}
            Guardar
          </a>
        </button>
      </div>

      <table class="ventas">
        <tr>
          <th>ID Producto</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Acciones</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Muffins</td>
          <td>$12.000</td>
          <td>2</td>
          <td>
            <span>
              <img class="icono" src={edit} alt="Editar" />
              <img class="icono" src={eliminar} alt="" />
            </span>
          </td>
        </tr>
      </table>
    </div>
  );
};
export default RegistrarVenta;
