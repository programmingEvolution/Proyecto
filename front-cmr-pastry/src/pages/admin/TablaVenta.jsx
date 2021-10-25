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

const TablaVenta = () => {
  const { setUserData } = useUser();
  const [ventas, setVentas] = useState([]);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  const [busqueda, setBusqueda] = useState("");
  const [ventasFiltradas, setVentasFiltradas] = useState(ventas);
  const form = useRef(null);


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
              <button className="buttonForm" type="submit">
                Buscar
              </button>
            </section>
          </form>
        </ul>
      </section>

      <section>
        <Link to="registrarventa">
          <button className="buttonForm">Nueva venta</button>
        </Link>
      </section>

      <section>
        <form ref={form} onSubmit={submitEdit}>
          <table>
            <thead>
              <tr>
                <th>ID Venta</th>
                <th>ID Vendedor</th>
                <th>ID cliente</th>
                <th>Nombre Cliente</th>
                <th>Productos</th>
                <th>Valor</th>
                <th>Cantidad</th>
                <th>Valor Total</th>
                <th>Fecha</th>
                <th>Estado</th>
                <th>Editar</th>
              </tr>
            </thead>
            <tbody>
              {ventasFiltradas.map((venta) => {
                return <FilaVentas venta={venta} key={venta._id} />;
              })}
            </tbody>
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
  const [color, setColor] = useState(true)


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

  const actualizarVenta = ( (venta) => {

    setUserData(venta);
    history.push("/modificarventa")
    /* console.log(infoNuevaVenta);

    await editarVenta(
      venta._id,
      {
        idCliente: infoNuevaVenta.idCliente,
        nombreCliente: infoNuevaVenta.nombreCliente,
        vendedor: infoNuevaVenta.vendedor,
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
    ); */


   

    

   
  });

  useEffect(() => {
    let total = 0;
    Object.values(infoNuevaVenta.productos).forEach((f) => {
      total = total + f.total;
    });
    setTotalVentas(total);
    console.log(totalVentas)
    console.log(total)
  }, [infoNuevaVenta]);

  useEffect(()=>{
    
  })


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
              defaultValue={infoNuevaVenta.vendedor}
              onChange={(e) =>
                setinfoNuevaVenta({
                  ...infoNuevaVenta,
                  vendedor: e.target.value,
                })
              }
            >
              {usuarios.map((el) => {
                return <option value={el._id}>{el.idUsuario}</option>;
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
                      defaultValue={producto.nombreProducto}
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
                      onChange={(e) => 

                        {
                        
                        setinfoNuevaVenta({
                          ...infoNuevaVenta,
                         

                          productos: {
                            ...infoNuevaVenta.productos,
                            [number]: {

                              ...infoNuevaVenta.productos[number],

                              cantidad: e.target.value,
                              total: parseFloat(producto.precioUnidad) *
                              parseFloat(e.target.value)
                            },
                          },
                        })}
                      }
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
              Value={venta.fecha}
            ></input>
          </td>

          <td>
            <select className="selectForm" type="date" Value={venta.fecha}>
              <option>Finalizada</option>
              <option>Anulada</option>
            </select>
          </td>
        </>
      ) : (
        <>
          <td>{venta._id.slice(15)}</td>
          <td>{Object.values(venta.vendedor._id).slice(15)}</td>
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
          <td className="badge exitoso">{venta.estado}</td>
        </>
      )}
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
            onClick={() => {//setEditar(!editar);
              actualizarVenta(venta);
            }}
          >
            <img class="icono" src={edit} alt="Editar" />
          </i>
        )}
      </td>
    </tr>
  );
};
export default TablaVenta;
