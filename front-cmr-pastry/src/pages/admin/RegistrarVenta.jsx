import React from "react";

import ContenedorTitulos from "../../components/ContenedorTitulos";
import edit from "../../media/edit.png";
import eliminar from "../../media/eliminar.png";
import { Link } from "react-router-dom";

const RegistrarVenta = () => {
  return (
    <div className="ml-20">
      <section>
        <ContenedorTitulos Titulo="Registrar ventas" />
      </section>
      <form>
        <div className="place-content-center flex space-x-6 mt-12">
          <label for="">Id Cliente:
          <input
            className="inputForm"
            type="number"
            placeholder="Ingrese el id del cliente"
            required
          />
          </label>
          <label for="">Producto:
          <input className="inputForm" type="text" required />
          </label>
          <label for="vendedor">ID Vendedor:
          <input className="inputForm" name="vendedor" type="number" required />
          </label>
        </div>
        <div className="place-content-center flex space-x-6">
          <label className="flex flex-col"for="">Cantidad:
            <input 
            className="inputForm" 
            type="number" 
            required 
          />
          </label>
          <label className="flex flex-col"  for="">Estado de venta:
            <select
              className="selectForm" 
              id="estadoUsuario">
                <option>En proceso</option>
                <option>Finalizada</option>
                <option>Despachada</option>
            </select>
          </label>     
          <label className="flex flex-col"  for="">Fecha de venta:
            <input 
            className="selectForm" 
            type="date" 
            required />
         </label>
        </div>
        </form>

      <div className="place-content-center flex space-x-6">
      <button className="bg-red-100 my-7 h-10 rounded-lg border cursor-pointer hover:bg-red-200 p-2 pl-5 pr-5" type="submit" value="Agregar Producto">
        Agregar Producto
      </button>
        <button className="bg-red-100 my-7 h-10 rounded-lg border cursor-pointer hover:bg-red-200 p-2 pl-5 pr-5">
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
