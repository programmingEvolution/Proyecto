import React, { useRef } from "react";
import { Link } from "react-router-dom";
import edit from "../media/edit.png";
import check from "../media/check.png";
import ContenedorTitulos from "../components/ContenedorTitulos";
import { obtenerUsuarios, editarUsuario } from "../utils/api";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import PrivateComponent from "../components/PrivateComponent";
import modificarVenta from "../components/PrivateUsuario";
import PrivateUsuario from "../components/PrivateUsuario";
import Pagination from "../components/pagination";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [usuariosFiltrados, setUsuariosFiltrados] = useState(usuarios);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const form = useRef(null);
  const submitEdit = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);
  };

  useEffect(() => {
    console.log("consulta", ejecutarConsulta);
    if (ejecutarConsulta) {
      obtenerUsuarios(
        (response) => {
          console.log("la respuesta que se recibio fue", response);
          setUsuarios(response.data);
        },
        (error) => {
          console.error("Salio un error:", error);
        }
      );
      setEjecutarConsulta(false);
    }
  }, [ejecutarConsulta]);

  useEffect(() => {
    setUsuariosFiltrados(
      usuarios.filter((elemento) => {
        return JSON.stringify(elemento)
          .toLowerCase()
          .includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, usuarios]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = usuariosFiltrados.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <section>
        <ContenedorTitulos Titulo="Gestión de Usuarios" />
      </section>
      <section>
        <ul className="contenedorBotonesgrises">
          <form ref={form} onSubmit={submitEdit}>
            <section>
              <label className="labelForm" htmlFor="name">
                Buscar Usuario:
              </label>
              <input
                value={busqueda}
                className="inputForm"
                id="name"
                placeholder="Ingrese el nombre del usuario"
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
        <table>
          <tr>
            <td className="tituloColumnaUsu">IDUsuario</td>
            <td className="tituloColumnaUsu">Nombre</td>
            <td className="tituloColumnaUsu">Rol</td>
            <td className="tituloColumnaUsu">Estado</td>
            <PrivateComponent roleList={["Administrador"]}>
              <td className="tituloColumnaUsu">Agregar Productos</td>
              <td className="tituloColumnaUsu">Modificar Productos</td>
              <td className="tituloColumnaUsu">Modificar usuarios</td>
              <td className="tituloColumnaUsu">Modificar Ventas</td>
              <PrivateUsuario roleList={[true]}>
              <td className="tituloColumnaUsu">Gestionar</td>
              </PrivateUsuario>
            </PrivateComponent>
          </tr>
          <tbody>
            {currentPosts.map((usuario) => {
              return (
                <FilaUsuario key={usuario._id} usuario={usuario}></FilaUsuario>
              );
            })}
          </tbody>
        </table>
        <Pagination
            postsPerPage={postsPerPage}
            totalPosts={usuarios.length}
            paginate={paginate}
          />
      </section>
    </div>
  );
};

const FilaUsuario = ({ usuario }) => {
  const [editar, setEditar] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [usuariosFiltrados, setUsuariosFiltrados] = useState(usuarios);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  const [infoNuevoUsuario, setinfoNuevoUsuario] = useState({
    name: usuario.name,
    rolUsuario: usuario.rolUsuario,
    estadoUsuario: usuario.estadoUsuario,
    modificarProducto: usuario.modificarProducto,
    añadirProducto: usuario.añadirProducto,
    modificarUsuario: usuario.añadirUsuario,
    modificarVenta: usuario.modificarVenta,
  });

  useEffect(() => {
    console.log("consulta", ejecutarConsulta);
    if (ejecutarConsulta) {
      obtenerUsuarios(
        (response) => {
          console.log("la respuesta que se recibio fue", response);
          setUsuarios(response.data);
        },
        (error) => {
          console.error("Salio un error:", error);
        }
      );
      setEjecutarConsulta(false);
    }
  }, [ejecutarConsulta]);

  useEffect(() => {
    setUsuariosFiltrados(
      usuarios.filter((elemento) => {
        return JSON.stringify(elemento)
          .toLowerCase()
          .includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, usuarios]);

  const actualizarUsuario = async () => {
    //enviar la info al backend

    await editarUsuario(
      usuario._id,
      {
        name: infoNuevoUsuario.name,
        rolUsuario: infoNuevoUsuario.rolUsuario,
        estadoUsuario: infoNuevoUsuario.estadoUsuario,
        modificarProducto: infoNuevoUsuario.modificarProducto,
        añadirProducto: infoNuevoUsuario.añadirProducto,
        modificarUsuario: infoNuevoUsuario.añadirUsuario,
        modificarVenta: infoNuevoUsuario.modificarVenta,
      },
      (response) => {
        console.log(response.data);
        setEditar(false);

        Swal.fire("Actualizado!", "Usuario actualizado con exito.", "success");
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
          {" "}
          <td>
            <input
              className="inputForm"
              type="text"
              defaultValue={usuario._id}
              disabled
            ></input>
          </td>
          <td>
            <input
              className="inputForm"
              type="text"
              value={infoNuevoUsuario.name}
              onChange={(e) =>
                setinfoNuevoUsuario({
                  ...infoNuevoUsuario,
                  name: e.target.value,
                })
              }
            ></input>
          </td>
          <td>
            <select
              className="inputForm"
              type="text"
              value={infoNuevoUsuario.rolUsuario}
              onChange={(e) =>
                setinfoNuevoUsuario({
                  ...infoNuevoUsuario,
                  rolUsuario: e.target.value,
                })
              }
            >
              <option>Sin asignar</option>
              <option>Vendedor</option>
              <option>Administrador</option>
            </select>
          </td>
          <td>
            <select
              className="inputForm"
              type="text"
              value={infoNuevoUsuario.estadoUsuario}
              onChange={(e) =>
                setinfoNuevoUsuario({
                  ...infoNuevoUsuario,
                  estadoUsuario: e.target.value,
                })
              }
            >
              <option>En espera</option>
              <option>Autorizado</option>
              <option>No autorizado</option>
            </select>
          </td>
          <td>
            <input
              className="inputForm"
              type="checkbox"
              checked={infoNuevoUsuario.añadirProducto}
              onChange={(e) =>
                setinfoNuevoUsuario({
                  ...infoNuevoUsuario,
                  añadirProducto: e.target.checked,
                })
              }
            ></input>
          </td>
          <td>
            <input
              className="inputForm"
              type="checkbox"
              Checked={infoNuevoUsuario.modificarProducto}
              onChange={(e) =>
                setinfoNuevoUsuario({
                  ...infoNuevoUsuario,
                  modificarProducto: e.target.checked,
                })
              }
            ></input>
          </td>
          <td>
            <input
              className="inputForm"
              type="checkbox"
              checked={infoNuevoUsuario.modificarUsuario}
              onChange={(e) =>
                setinfoNuevoUsuario({
                  ...infoNuevoUsuario,
                  modificarUsuario: e.target.checked,
                })
              }
            ></input>
          </td>
          <td>
            <input
              className="inputForm"
              type="checkbox"
              Checked={infoNuevoUsuario.modificarVenta}
              onChange={(e) =>
                setinfoNuevoUsuario({
                  ...infoNuevoUsuario,
                  modificarVenta: e.target.checked,
                })
              }
            ></input>
          </td>
        </>
      ) : (
        <>
          <td className="filaImpar">{usuario._id}</td>
          <td className="filaImpar">{usuario.name}</td>
          <td className="filaImpar">{usuario.rolUsuario}</td>
          <td className="filaImpar">{usuario.estadoUsuario}</td>
          <PrivateComponent roleList={["Administrador"]}>
            <td className="filaImpar">
              <input type="checkbox" checked={usuario.añadirProducto} />{" "}
              <label className="labelcheck">{`${usuario.añadirProducto}`}</label>
            </td>
            <td className="filaImpar">
              <input type="checkbox" checked={usuario.modificarProducto} />{" "}
              <label className="labelcheck">{`${usuario.modificarProducto}`}</label>
            </td>
            <td className="filaImpar">
              {" "}
              <input type="checkbox" checked={usuario.modificarUsuario} />{" "}
              <label className="labelcheck">{`${usuario.modificarUsuario}`}</label>
            </td>
            <td className="filaImpar">
              {" "}
              <input type="checkbox" checked={usuario.modificarVenta} />{" "}
              <label className="labelcheck">{`${usuario.modificarVenta}`}</label>
            </td>
          </PrivateComponent>
        </>
      )}
     <PrivateComponent roleList={["Administrador"]}>
      <PrivateUsuario roleList={[true]}>

        <td className="filaImpar">
          {editar ? (
            <i
              onClick={() => {
                actualizarUsuario();
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
        </PrivateUsuario>
        </PrivateComponent>
    
    </tr>
  );
};

export default Usuarios;
