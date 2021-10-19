import React, { useRef } from "react";
import { Link } from "react-router-dom";
import edit from "../media/edit.png";
import check from "../media/check.png";
import ContenedorTitulos from "../components/ContenedorTitulos";
import { obtenerUsuarios, editarUsuario } from "../utils/api";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [usuariosFiltrados, setUsuariosFiltrados] = useState(usuarios);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

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

  return (
    <div>
      <section>
        <ContenedorTitulos Titulo="Gestión de Usuarios" />
      </section>
      <section>
        
         
            <section className="place-content-center flex space-x-6">
              <input
                value={busqueda}
                className='w-25 h-10 my-7 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200'
                id="idUsuario"
                placeholder="Buscar Usuario"
                type="ID"
                onChange={(e) => setBusqueda(e.target.value)}
              ></input>
              <button className='bg-red-100 my-7 h-10 rounded-lg border cursor-pointer hover:bg-red-200 p-2 pl-5 pr-5' type="submit">
                Buscar
              </button>
            </section>
          
        
      </section>

      <section>
        <table className="tabla place-content-center">
          <tr>
            <th>IDUsuario</th>
            <th>Nombre</th>
            <th>Rol</th>
            <th>Estado</th>
            <th>Agregar Productos</th>
            <th>Modificar Productos</th>
            <th>Añadir usuarios</th>
            <th>Modificar usuarios</th>
            <th>Gestionar</th>
          </tr>
          <tbody>
            {usuariosFiltrados.map((usuario) => {
              return (
                <FilaUsuario key={usuario._id} usuario={usuario}></FilaUsuario>
              );
            })}
          </tbody>
        </table>
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
    idUsuario: usuario.idUsuario,
    rolUsuario: usuario.rolUsuario,
    estadoUsuario: usuario.estadoUsuario,
    modificarProducto: usuario.modificarProducto,
    modificarUsuario: usuario.modificarUsuario,
    añadirProducto: usuario.añadirProducto,
    añadirUsuario: usuario.añadirUsuario,
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
        idUsuario: infoNuevoUsuario.idUsuario,
        rolUsuario: infoNuevoUsuario.rolUsuario,
        estadoUsuario: infoNuevoUsuario.estadoUsuario,
        modificarProducto: infoNuevoUsuario.modificarProducto,
        modificarUsuario: infoNuevoUsuario.modificarUsuario,
        añadirProducto: infoNuevoUsuario.añadirProducto,
        añadirUsuario: infoNuevoUsuario.añadirUsuario,
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
    <tr className="tabla.tr">
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
              value={infoNuevoUsuario.idUsuario}
              onChange={(e) =>
                setinfoNuevoUsuario({
                  ...infoNuevoUsuario,
                  idUsuario: e.target.value,
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
              checked={infoNuevoUsuario.añadirUsuario}
              onChange={(e) =>
                setinfoNuevoUsuario({
                  ...infoNuevoUsuario,
                  añadirUsuario: e.target.checked,
                })
              }
            ></input>
          </td>
          <td>
            <input
              className="inputForm"
              type="checkbox"
              Checked={infoNuevoUsuario.modificarUsuario}
              onChange={(e) =>
                setinfoNuevoUsuario({
                  ...infoNuevoUsuario,
                  modificarUsuario: e.target.checked,
                })
              }
            ></input>
          </td>
        </>
      ) : (
        <>
          <td className="filaImpar">{usuario._id}</td>
          <td className="filaImpar">{usuario.idUsuario}</td>
          <td className="filaImpar">{usuario.rolUsuario}</td>
          <td className="filaImpar">{usuario.estadoUsuario}</td>
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
            <input type="checkbox" checked={usuario.añadirUsuario} />{" "}
            <label className="labelcheck">{`${usuario.añadirUsuario}`}</label>
          </td>
          <td className="filaImpar">
            {" "}
            <input type="checkbox" checked={usuario.modificarUsuario} />{" "}
            <label className="labelcheck">{`${usuario.modificarUsuario}`}</label>
          </td>
        </>
      )}
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
    </tr>
  );
};

export default Usuarios;
