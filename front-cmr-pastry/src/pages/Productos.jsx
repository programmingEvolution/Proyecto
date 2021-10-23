import React, { useRef } from "react";
import { Link } from "react-router-dom";
import edit from "../media/edit.png";
import check from "../media/check.png";
import eliminar from "../media/eliminar.png";
import ContenedorTitulos from "../components/ContenedorTitulos";
import {
  editarProducto,
  eliminarProducto,
  obtenerProductos,
} from "../utils/api";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";



const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [productosFiltrados, setProductosFiltrados] = useState(productos);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  const form = useRef(null);
  const submitEdit = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);
  };

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
    <div className="ml-96 md mx-96">
      <section>
        <ContenedorTitulos Titulo="Gestión de productos" />
      </section>
      <section>
        
          
          <section className="place-content-center flex space-x-6 ">
            <input
              value={busqueda}
              className=' w-15 h-10 my-7 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 '
              id="idProducto"
              placeholder="Buscar Producto"
              type="ID"
              onChange={(e) => setBusqueda(e.target.value)}
            ></input>
            
            <button className='bg-red-100 my-7 h-10 rounded-lg border m-2 cursor-pointer hover:bg-red-200 p-2 pl-5 pr-5' type="submit">
              Buscar
            </button>
            <Link to="registrarproducto">
             <button className='bg-red-100 my-7 h-10 rounded-lg border cursor-pointer hover:bg-red-200 p-2 pl-5 pr-5'>Nuevo Producto</button>
            </Link>
           </section>
        
      </section>

      
      <section >
          <form ref={form} onSubmit={submitEdit}>
              <table className="tabla">
                <thead>
                  <tr>
                    <th >IDproductos</th>
                    <th>Provedor</th>
                    <th>Tipo de producto</th>
                    <th>Precio Unidad</th>
                    <th>Cantidad</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {productosFiltrados.map((producto) => {
                    return <FilaProducto key={producto._id} producto={producto} />;
                  })}
                </tbody>
              </table>
            </form>
          </section>
    </div>
  );
};

const FilaProducto = ({ producto }) => {
  const [editar, setEditar] = useState(false);
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [productosFiltrados, setProductosFiltrados] = useState(productos);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  const [infoNuevoProducto, setinfoNuevoProducto] = useState({
    nombreProducto: producto.nombreProducto,
    proveedor: producto.proveedor,
    precioUnidad: producto.precioUnidad,
    inventario: producto.inventario,
  });

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

  const actualizarProducto = async () => {
    //enviar la info al backend

    await editarProducto(
      producto._id,
      {
        nombreProducto: infoNuevoProducto.nombreProducto,
        proveedor: infoNuevoProducto.proveedor,
        precioUnidad: infoNuevoProducto.precioUnidad,
        inventario: infoNuevoProducto.inventario,
      },
      (response) => {
        console.log(response.data);
        setEditar(false);

        Swal.fire("Actualizado!", "Producto actualizado con exito.", "success");
        setEjecutarConsulta(true);
        window.location.reload();
      },
      (error) => {
        console.error(error);
      },

    );
  };

  return (
    <tr className="tabla.tr">
      {editar ? (
        <>
          <td>
            <input
              className="inputForm"
              type="text"
              defaultValue={producto._id}
              disabled
            ></input>
          </td>
          <td>
            <input
              className="inputForm"
              type="text"
              value={infoNuevoProducto.proveedor}
              onChange={(e) =>
                setinfoNuevoProducto({
                  ...infoNuevoProducto,
                  proveedor: e.target.value,
                })
              }
            ></input>
          </td>
          <td>
            <input
              className="inputForm"
              type="text"
              value={infoNuevoProducto.nombreProducto}
              onChange={(e) =>
                setinfoNuevoProducto({
                  ...infoNuevoProducto,
                  nombreProducto: e.target.value,
                })
              }
            ></input>
          </td>
          <td>
            <input
              className="inputForm"
              type="text"
              value={infoNuevoProducto.precioUnidad}
              onChange={(e) =>
                setinfoNuevoProducto({
                  ...infoNuevoProducto,
                  precioUnidad: e.target.value,
                })
              }
            ></input>
          </td>
          <td>
            <input
              className="inputForm"
              type="text"
              value={infoNuevoProducto.inventario}
              onChange={(e) =>
                setinfoNuevoProducto({
                  ...infoNuevoProducto,
                  inventario: e.target.value,
                })
              }
            ></input>
          </td>
        </>
      ) : (
        <>
          <td className="filaImpar">{producto._id}</td>
          <td className="filaImpar">{producto.proveedor}</td>
          <td className="filaImpar">{producto.nombreProducto}</td>
          <td className="filaImpar">{producto.precioUnidad}</td>
          <td className="filaImpar">{producto.inventario}</td>
        </>
      )}
      <td className="filaImpar">
        {editar ? (
          <i
            onClick={() => {
              actualizarProducto();
            }}
          >
            <img class="icono" src={check} alt="check" />
          </i>
        ) : (
          <i
            onClick={() => {
              setEditar(!editar);
            }}
          >
            <img class="icono" src={edit} alt="Editar" />
          </i>
        )}
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
  );
};

export default Productos;
