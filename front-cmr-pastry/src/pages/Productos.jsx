import React from "react";
import { Link } from "react-router-dom";
import edit from "../media/edit.png";
import eliminar from "../media/eliminar.png";
import ContenedorTitulos from "../components/ContenedorTitulos";
import { eliminarProducto, obtenerProductos } from "../utils/api";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";



const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [productosFiltrados, setProductosFiltrados] = useState(productos);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

  const history = useHistory();

  useEffect(() => {
    console.log("consulta", ejecutarConsulta);
    if (ejecutarConsulta) {
      obtenerProductos(
        (response) => {
          console.log("la respuesta que se recibio fue", response);
          setProductos(response.data);
        },
        (error) => {
          console.error("Salio un error:", error);
        }
      );
      setEjecutarConsulta(false);
    }
  }, [ejecutarConsulta]);

  useEffect(() => {
    setProductosFiltrados(
      productos.filter((elemento) => {
        return JSON.stringify(elemento)
          .toLowerCase()
          .includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, productos]);

  const editarProducto = (id) => {
    
    history.push("/modificarproducto/");
    console.log(id)
  
  };

  const deleteProducto = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(id);
        eliminarProducto(
          id,

          (response) => {
            console.log(response.data);

            setEjecutarConsulta(true);
          },
          (error) => {
            console.error(error);
          }
        );
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div>
      <section>
        <ContenedorTitulos Titulo="Gestión de productos" />
      </section>
      <section>
        <ul className="contenedorBotonesgrises">
          <section>
            <label className="labelForm" htmlFor="idProducto">
              Buscar Producto:
            </label>
            <input
              value={busqueda}
              className="inputForm"
              id="idProducto"
              placeholder="Ingrese el nombre del producto"
              type="ID"
              onChange={(e) => setBusqueda(e.target.value)}
            ></input>
          </section>
          <section className="flex-grow justify-between">
            <button className="buttonForm" type="submit">
              Buscar
            </button>
          </section>
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
              <td className="tituloColumna">Eliminar</td>
            </tr>
          </thead>
          <tbody>
            {productosFiltrados.map((producto) => (
              <tr key={producto._id}>
                <td className="filaImpar">{producto._id}</td>
                <td className="filaImpar">{producto.proveedor}</td>
                <td className="filaImpar">{producto.nombreProducto}</td>
                <td className="filaImpar">{producto.precioUnidad}</td>
                <td className="filaImpar">{producto.inventario}</td>
                <td className="filaImpar">
                  <button onClick={() => {
                      editarProducto(producto._id);
                    }}
                  >
                    <img class="icono" src={edit} alt="Editar" />
                  </button>
                </td>
                <td className="filaImpar">
                  <button
                    onClick={() => {
                      deleteProducto(producto._id);
                    }}
                  >
                    <img class="icono" src={eliminar} alt="Eliminar" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Productos;
