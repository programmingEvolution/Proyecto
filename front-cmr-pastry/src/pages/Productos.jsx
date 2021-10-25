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
import ReactLoading from "react-loading";
import PrivateComponent from "../components/PrivateComponent";

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

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProductos = async () => {
      setLoading(true);
      await obtenerProductos(
        (response) => {
          console.log("la respuesta que se recibio fue", response);
          setProductos(response.data);
          setEjecutarConsulta(false);
          setLoading(false);
        },
        (error) => {
          console.error("Salio un error:", error);
          setLoading(false);
        }
      );
    };
    console.log("consulta", ejecutarConsulta);
    if (ejecutarConsulta) {
      fetchProductos();
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
          },
          (error) => {
            console.error(error);
          }
        );
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        setEjecutarConsulta(true);
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

      <PrivateComponent roleList={['Administrador']}>

      <section>
        <Link to="registrarproducto">
          <button className="buttonForm">Nuevo Producto</button>
        </Link>
      </section>

      </PrivateComponent>

      <section>
        <form ref={form} onSubmit={submitEdit}>
          {loading ? (
            <ReactLoading
              type="bars"
              color="#ffe5d9"
              height={"20%"}
              width={"20%"}
            />
          ) : (
            <table>
              <thead>
                <tr>
                  <td className="tituloColumna">IDproductos</td>
                  <td className="tituloColumna">Proveedor</td>
                  <td className="tituloColumna">Nombre</td>
                  <td className="tituloColumna">Precio unidad</td>
                  <td className="tituloColumna">Disponible</td>
                  <PrivateComponent roleList={['Administrador']}>
                  <td className="tituloColumna">Editar</td>
                  <td className="tituloColumna">Eliminar</td>
                  </PrivateComponent>
                </tr>
              </thead>
              <tbody>
                {productosFiltrados.map((producto) => {
                  return (
                    <FilaProducto key={producto._id} producto={producto} />
                  );
                })}
              </tbody>
            </table>
          )}
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
          },
          (error) => {
            console.error(error);
          }
        );
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        setEjecutarConsulta(true);
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
      }
    );
  };

  return (
    <tr>
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
       <PrivateComponent roleList={['Administrador']}>
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
      </PrivateComponent>
    </tr>
  );
};

export default Productos;
