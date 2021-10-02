import React from "react";

import ContenedorTitulos from "../../components/ContenedorTitulos";
import edit from "../../media/edit.png";
import eliminar from "../../media/eliminar.png";
import { Link } from "react-router-dom";

const RegistrarVenta = () => {
  return (
    <div>
      <h2 class="dash-title">Registrar Venta</h2>

      <form>
        <div class="field large">
          <label for="">Id Cliente:</label>
          <input type="number" required />
        </div>
        <div class="field">
          <label for="">Producto:</label>
          <input type="text" required />
        </div>
        <div class="field large">
          <label for="vendedor">ID Vendedor:</label>
          <input name="vendedor" type="number" required />
        </div>
        <div class="field short">
          <label for="">Cantidad:</label>
          <input type="number" required />
        </div>
        <div class="field">
          <input class="boton" type="submit" value="Agregar" />
        </div>
      </form>

      <div class="field boton fecha">
        <label class="fecha" for="">
          Fecha de venta
        </label>
        <input class="fecha" type="date" required />

        <button>
          <a class="add" href="">
            {" "}
            Añadir Productos
          </a>
        </button>
      </div>
      <table class="ventas">
        <tr>
          <th>ID Producto</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Muffins</td>
          <td>$12.000</td>
          <td>2</td>
          <td>
            <span class="badge exitoso">Finalizada</span>
          </td>
          <td>
            <span>
              <img class="icono" src={edit} alt="Editar" />
              <img class="icono" src="/img/eliminar.png" alt="" />
            </span>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Torta Grande</td>
          <td>$50.000</td>
          <td>1</td>
          <td>
            <span class="badge exitoso">Finalizada</span>
          </td>
          <td>
            <span>
              <img class="icono" src={edit} alt="Editar" />
              <img class="icono" src={eliminar} alt="" />
            </span>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Torta de Zanahoria</td>
          <td>$60.000</td>
          <td>2</td>
          <td>
            <span class="badge pendiente">En despacho</span>
          </td>
          <td>
            <span>
              <img class="icono" src={edit} alt="Editar" />
              <img class="icono" src={eliminar} alt="" />
            </span>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>Chocolates</td>
          <td>$120.000</td>
          <td>150</td>
          <td>
            <span class="badge pendiente">En despacho</span>
          </td>
          <td>
            <span>
              <img class="icono" src={edit} alt="Editar" />
              <img class="icono" src={eliminar} alt="" />
            </span>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>Mil Hojas</td>
          <td>$7.500</td>
          <td>2</td>
          <td>
            <span class="badge exitoso">Finalizada</span>
          </td>
          <td>
            <span>
              <img class="icono" src={edit} alt="Editar" />
              <img class="icono" src={eliminar} alt="" />
            </span>
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>Muffins</td>
          <td>$240.000</td>
          <td>40</td>
          <td>
            <span class="badge pendiente">En proceso</span>
          </td>
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
