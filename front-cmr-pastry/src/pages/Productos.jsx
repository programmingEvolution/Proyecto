import React from "react";
import { Link } from "react-router-dom";
import edit from "../media/edit.png";
import ContenedorTitulos from "../components/ContenedorTitulos";
import { obtenerProductos } from "../utils/api";
import { useState } from "react";

const Productos = () => {

  const [productos, setProductos] = useState([]);

  obtenerProductos( (response) => {
   
 setProductos(response.data)

 });
  
 console.log(productos[4])

  return (
    
  
    
    <div>


      
      <section>
        <ContenedorTitulos Titulo="Gestión de productos" />
      </section>
      <section>
        
        <ul className="contenedorBotonesgrises">
          <form>
            <section>
              <label className="labelForm" htmlFor="idProducto">
                Buscar Producto:
              </label>
              <input
                className="inputForm"
                id="idProducto"
                placeholder="Ingrese el nombre del producto"
                type="ID"
              ></input>
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
        <Link to="registrarproducto">
          <button className="buttonForm">Nuevo Producto</button>
        </Link>
      </section>

      <section>
        <table>
          <thead>
          <tr>
            <td className="tituloColumna">IDproductos</td>
            <td className="tituloColumna">Proveedor</td>
            <td className="tituloColumna">Nombre</td>
            <td className="tituloColumna">Precio unidad</td>
            <td className="tituloColumna">Disponible</td>
            <td className="tituloColumna">Editar</td>
          </tr>
          </thead>
          <tbody>
          {productos.map((producto) =>(
  <tr key={producto._id}>
            <td className="filaImpar">{producto._id}</td>
            <td className="filaImpar">{producto.proveedor}</td>
            <td className="filaImpar">{producto.nombreProducto}</td>
            <td className="filaImpar">{producto.precioUnidad}</td>
            <td className="filaImpar">{producto.inventario}</td>
            <Link to="/modificarproducto">
              <span>
                <img class="icono" src={edit} alt="Editar" />
              </span>
            </Link>
          </tr>
          ))}</tbody>
         
        </table>
      </section>
    </div>
  );
};

export default Productos;
