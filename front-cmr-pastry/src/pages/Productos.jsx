import React from "react";
import { Link } from "react-router-dom";
import edit from "../media/edit.png";
import ContenedorTitulos from "../components/ContenedorTitulos";

const Productos = () => {
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
          <tr>
            <td className="tituloColumna">IDproductos</td>
            <td className="tituloColumna">Proveedor</td>
            <td className="tituloColumna">Nombre</td>
            <td className="tituloColumna">Variantes</td>
            <td className="tituloColumna">Precio unidad</td>
            <td className="tituloColumna">Disponible</td>
            <td className="tituloColumna">Editar</td>
          </tr>
          <tr>
            <td className="filaImpar">0001</td>
            <td className="filaImpar">Juli's Pastry</td>
            <td className="filaImpar">Muffins</td>
            <td className="filaImpar">
              Zanahoria, manzana, banano y maracuyá.
            </td>
            <td className="filaImpar">$4000</td>
            <td className="filaImpar">60</td>
            <Link to="/modificarproducto">
              <span>
                <img class="icono" src={edit} alt="Editar" />
              </span>
            </Link>
          </tr>
          <tr>
            <td className="filaPar">0002</td>
            <td className="filaPar">Juli's Pastry</td>
            <td className="filaPar">Mini Muffins</td>
            <td className="filaPar">Zanahoria, manzana, banano y maracuyá.</td>
            <td className="filaPar">$2000</td>
            <td className="filaPar">50</td>
            <Link to="/modificarventa">
              <span>
                <img class="icono" src={edit} alt="Editar" />
              </span>
            </Link>
          </tr>
          <tr>
            <td className="filaImpar">0003</td>
            <td className="filaImpar">Juli's Pastry</td>
            <td className="filaImpar">Torta circular grande</td>
            <td className="filaImpar">
              Zanahoria, manzana, banano y maracuyá.
            </td>
            <td className="filaImpar">$25000</td>
            <td className="filaImpar">20</td>
            <Link to="/modificarventa">
              <span>
                <img class="icono" src={edit} alt="Editar" />
              </span>
            </Link>
          </tr>
          <tr>
            <td className="filaPar">0004</td>
            <td className="filaPar">Juli's Pastry</td>
            <td className="filaPar">Torta circular mediana</td>
            <td className="filaPar">Zanahoria, manzana, banano y maracuyá.</td>
            <td className="filaPar">$16000</td>
            <td className="filaPar">10</td>
            <Link to="/modificarventa">
              <span>
                <img class="icono" src={edit} alt="Editar" />
              </span>
            </Link>
          </tr>
          <tr>
            <td className="filaImpar">0005</td>
            <td className="filaImpar">Juli's Pastry</td>
            <td className="filaImpar">Torta circular pequeña</td>
            <td className="filaImpar">
              Zanahoria, manzana, banano y maracuyá.
            </td>
            <td className="filaImpar">$12000</td>
            <td className="filaImpar">15</td>
            <Link to="/modificarventa">
              <span>
                <img class="icono" src={edit} alt="Editar" />
              </span>
            </Link>
          </tr>
          <tr>
            <td className="filaPar">0006</td>
            <td className="filaPar">Juli's Pastry</td>
            <td className="filaPar">Mini Torta</td>
            <td className="filaPar">Zanahoria, manzana, banano y maracuyá.</td>
            <td className="filaPar">$8000</td>
            <td className="filaPar">6</td>
            <Link to="/modificarventa">
              <span>
                <img class="icono" src={edit} alt="Editar" />
              </span>
            </Link>
          </tr>
        </table>
      </section>
    </div>
  );
};

export default Productos;
