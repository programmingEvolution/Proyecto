import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContenedorTitulos from "../../components/ContenedorTitulos";
import edit from "../../media/edit.png";
import { useState, useEffect } from "react";
import { obtenerVentas, editarVenta } from "../../utils/api";
import { useUser } from "../../context/userContext";
import { useHistory } from "react-router-dom";
import check from "../../media/check.png";
import { obtenerProductos } from "../../utils/api";
import { obtenerUsuarios } from "../../utils/api";
import Swal from "sweetalert2";
import PrivateComponent from "../../components/PrivateComponent";
import Pagination from "../../components/pagination";
import PrivateVenta from "../../components/PrivateVenta";

const TablaVenta = () => {
  const { setUserData } = useUser();
  const [ventas, setVentas] = useState([]);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  const [busqueda, setBusqueda] = useState("");
  const [ventasFiltradas, setVentasFiltradas] = useState(ventas);
  const form = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const [color, setColor] = useState("text-blue-400");

  const submitEdit = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);
    const formData = {};
    fd.forEach((value, key) => {
      formData[key] = value;
    });
  };

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

  useEffect(() => {
    setVentasFiltradas(
      ventas.filter((elemento) => {
        return JSON.stringify(elemento)
          .toLowerCase()
          .includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, ventas]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = ventasFiltradas.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
                value={busqueda}
                className="inputForm"
                id="idProducto"
                placeholder="Ingrese el nombre del producto"
                type="ID"
                onChange={(e) => setBusqueda(e.target.value)}
              ></input>
            </section>
            <section className="flex-grow justify-between">
              <button
                className="bg-red-100 my-7 h-10 rounded-lg border cursor-pointer hover:bg-red-200 p-2 pl-5 pr-5"
                type="submit"
              >
                Buscar
              </button>
            </section>
          </form>
        </ul>
      </section>
      <PrivateComponent roleList={(["Administrador"], ["Vendedor"])}>
        <section>
          <Link to="registrarventa">
            <button className="buttonForm">Nueva venta</button>
          </Link>
        </section>
      </PrivateComponent>

      <section>
        <form ref={form} onSubmit={submitEdit}>
          <table className="tabla">
            <thead>
              <tr>
                <th>ID Venta</th>
                <th>Nombre Vendedor</th>
                <th>ID cliente</th>
                <th>Nombre Cliente</th>
                <th>Productos</th>
                <th>Valor</th>
                <th>Cantidad</th>
                <th>Valor Total</th>
                <th>Fecha</th>
                <th>Estado</th>
                <PrivateVenta roleList={[true]}>
                  <PrivateComponent roleList={["Vendedor"]}>
                    <th>Editar</th>
                  </PrivateComponent>
                  <PrivateComponent roleList={["Administrador"]}>
                    <th>Editar</th>
                  </PrivateComponent>
                </PrivateVenta>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((venta) => {
                return <FilaVentas venta={venta} key={venta._id} />;
              })}
            </tbody>
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={ventas.length}
              paginate={paginate}
            />
          </table>
        </form>
      </section>
    </div>
  );
};

const FilaVentas = ({ venta, producto }) => {
  const { setUserData } = useUser();
  const { userData } = useUser();
  const [usuarios, setUsuarios] = useState([]);
  const [productosVenta, setProductosVenta] = useState([]);
  const [ejecutarConsultaProductos, setEjecutarConsultaProductos] =
    useState(true);
  const [ejecutarConsultaUsuarios, setEjecutarConsultaUsuarios] =
    useState(true);

  const [editar, setEditar] = useState(false);

  const [valor, setValor] = useState(0);
  const [totalVentas, setTotalVentas] = useState(0);
  const [color, setColor] = useState(true);

  const [infoNuevaVenta, setinfoNuevaVenta] = useState({
    idCliente: venta.idCliente,
    nombreCliente: venta.nombreCliente,
    vendedor: venta.vendedor,
    estado: venta.estado,
    fecha: venta.fecha,
    valorTotal: venta.valorTotal,
    productos: venta.productos,
  });

  let history = useHistory();

  useEffect(() => {
    console.log("consulta", ejecutarConsultaProductos);
    if (ejecutarConsultaProductos) {
      obtenerProductos(
        (response) => {
          console.log("la respuesta que se recibio fue", response);
          setProductosVenta(response.data);
        },
        (error) => {
          console.error("Salio un error:", error);
        }
      );
      setEjecutarConsultaProductos(false);
    }
  }, [ejecutarConsultaProductos]);

  useEffect(() => {
    console.log("consulta", ejecutarConsultaUsuarios);
    if (ejecutarConsultaUsuarios) {
      obtenerUsuarios(
        (response) => {
          console.log("la respuesta que se recibio fue", response);
          setUsuarios(response.data);
        },
        (error) => {
          console.error("Salio un error:", error);
        }
      );
      setEjecutarConsultaUsuarios(false);
    }
  }, [ejecutarConsultaUsuarios]);

  const actualizarVenta = async (venta) => {
    console.log(infoNuevaVenta);

    await editarVenta(
      venta._id,
      {
        idCliente: infoNuevaVenta.idCliente,
        nombreCliente: infoNuevaVenta.nombreCliente,
        vendedor: usuarios.filter((v) => v._id === infoNuevaVenta.vendedor)[0],
        estado: infoNuevaVenta.estado,
        fecha: infoNuevaVenta.fecha,
        valorTotal: totalVentas,
        productos: Object.values([infoNuevaVenta.productos][0]),
      },
      (response) => {
        console.log(response.data);
        setEditar(false);

        Swal.fire("Actualizado!", "Usuario actualizado con exito.", "success");
        window.location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const actualizarProductos = (venta) => {
    setUserData(venta);
    history.push("/modificarventa");
  };

  useEffect(() => {
    let total = 0;
    Object.values(infoNuevaVenta.productos).forEach((f) => {
      total = total + f.total;
    });
    setTotalVentas(total);
    console.log(totalVentas);
    console.log(total);
  }, [infoNuevaVenta]);

  useEffect(() => {});

  return (
    <tr>
      {editar ? (
        <>
          <td>
            <input
              className="inputForm"
              type="text"
              defaultValue={venta._id}
              disabled
            ></input>
          </td>
          <td>
            <select
              className="inputForm"
              type="text"
              disabled
              defaultValue={infoNuevaVenta.vendedor._id}
              onChange={(e) =>
                setinfoNuevaVenta({
                  ...infoNuevaVenta,
                  vendedor: e.target.value,
                })
              }
            >
              {usuarios.map((el) => {
                return <option value={el._id}>{el.name}</option>;
              })}
            </select>
          </td>
          <td>
            <input
              className="inputForm"
              type="text"
              defaultValue={infoNuevaVenta.idCliente}
              onChange={(e) =>
                setinfoNuevaVenta({
                  ...infoNuevaVenta,
                  idCliente: e.target.value,
                })
              }
            ></input>
          </td>
          <td>
            <input
              className="inputForm"
              type="text"
              defaultValue={infoNuevaVenta.nombreCliente}
              onChange={(e) =>
                setinfoNuevaVenta({
                  ...infoNuevaVenta,
                  nombreCliente: e.target.value,
                })
              }
            ></input>
          </td>
          <td>
            <tr className="border-transparent">
              {venta.productos.map((producto, number) => (
                <tr key={number}>
                  <td className="border-transparent">
                    <select
                      className="inputForm"
                      type="text"
                      defaultValue={producto._id}
                      onChange={(e) => {
                        setinfoNuevaVenta({
                          ...infoNuevaVenta,

                          productos: {
                            ...infoNuevaVenta.productos,

                            [number]: productosVenta.filter(
                              (v) => v._id === e.target.value
                            )[0],
                          },
                        });
                      }}
                    >
                      {productosVenta.map((el) => {
                        return (
                          <option key={el._id} value={el._id}>
                            {el.nombreProducto}
                          </option>
                        );
                      })}
                    </select>
                  </td>
                </tr>
              ))}
            </tr>
          </td>
          <td>
            <tr className="border-transparent">
              {venta.productos.map((producto, number) => (
                <tr key={number}>
                  <td className="border-transparent">
                    <input
                      className="inputForm"
                      type="text"
                      disabled
                      defaultValue={producto.precioUnidad}
                      onChange={(e) =>
                        setinfoNuevaVenta({
                          ...infoNuevaVenta,

                          productos: {
                            ...venta.productos,
                            [number]: {
                              ...[number],

                              precioUnidad: e.target.value,
                            },
                          },
                        })
                      }
                    ></input>
                  </td>
                </tr>
              ))}
            </tr>
          </td>

          <td>
            <tr className="border-transparent">
              {venta.productos.map((producto, number) => (
                <tr key={number}>
                  <td className="border-transparent">
                    <input
                      className="inputForm"
                      type="text"
                      defaultValue={producto.cantidad}
                      onChange={(e) => {
                        setinfoNuevaVenta({
                          ...infoNuevaVenta,

                          productos: {
                            ...infoNuevaVenta.productos,
                            [number]: {
                              ...infoNuevaVenta.productos[number],

                              cantidad: e.target.value,
                              total:
                                parseFloat(producto.precioUnidad) *
                                parseFloat(e.target.value),
                            },
                          },
                        });
                      }}
                    ></input>
                  </td>
                </tr>
              ))}
            </tr>
          </td>

          <td>
            <input
              className="inputForm"
              type="text"
              defaultValue={totalVentas}
              disabled
              hidden
            ></input>
            {totalVentas}
          </td>

          <td>
            <input
              className="inputForm"
              type="date"
              defaultValue={venta.fecha}
              onChange={(e) =>
                setinfoNuevaVenta({
                  ...infoNuevaVenta,
                  fecha: e.target.value,
                })
              }
            ></input>
          </td>

          <td>
            <select
              className="selectForm"
              type="text"
              defaultValue={venta.estado}
              onChange={(e) =>
                setinfoNuevaVenta({
                  ...infoNuevaVenta,
                  estado: e.target.value,
                })
              }
            >
              <option>Finalizada</option>
              <option>Anulada</option>
            </select>
          </td>
        </>
      ) : (
        <>
          <td>{venta._id.slice(15)}</td>
          <td>{Object.values(venta.vendedor.name)}</td>
          <td>{venta.idCliente}</td>
          <td>{venta.nombreCliente}</td>
          <td>
            <tr className="border-transparent">
              {venta.productos.map((producto) => (
                <tr>
                  <td className="border-transparent">
                    {producto.nombreProducto}
                  </td>
                </tr>
              ))}
            </tr>
          </td>
          <td>
            <tr className="border-transparent">
              {venta.productos.map((producto) => (
                <tr>
                  <td className="border-transparent">
                    {producto.precioUnidad}
                  </td>
                </tr>
              ))}
            </tr>
          </td>
          <td>
            <tr className="border-transparent">
              {venta.productos.map((producto) => (
                <tr>
                  <td className="border-transparent">{producto.cantidad}</td>
                </tr>
              ))}
            </tr>
          </td>
          <td>{venta.valorTotal}</td>
          <td>{venta.fecha}</td>
          <td>
          <td
            className={
              venta.estado == "Anulada" ? "bg-red-500" : "bg-green-600"
            }
          >
            {venta.estado}
          </td>
          </td>
        </>
      )}
      <PrivateVenta roleList={[true]}>
        <PrivateComponent roleList={["Vendedor"]}>
          <td>
            {editar ? (
              <i
                onClick={() => {
                  actualizarVenta(venta);
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
        </PrivateComponent>
        <PrivateComponent roleList={["Administrador"]}>
          <td>
            <i
              onClick={() => {
                actualizarProductos(venta);
              }}
            >
              <img class="icono" src={edit} alt="Editar" />
            </i>
          </td>
        </PrivateComponent>
      </PrivateVenta>
    </tr>
  );
};
export default TablaVenta;
