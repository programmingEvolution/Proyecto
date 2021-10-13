import { Link } from "react-router-dom";
import edit from "../media/edit.png";
import ContenedorTitulos from "../components/ContenedorTitulos";
import { obtenerUsuarios } from "../utils/api";
import { useEffect, useState } from "react";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [usuariosFiltrados, setUsuariosFiltrados] = useState(usuarios);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

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
        <ul className="contenedorBotonesgrises">
          <form>
            <section>
              <label className="labelForm" htmlFor="idUsuario">
                Buscar Usuario:
              </label>
              <input
                value={busqueda}
                className="inputForm"
                id="idUsuario"
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
            <td className="tituloColumnaUsu">Agregar Productos</td>
            <td className="tituloColumnaUsu">Modificar Productos</td>
            <td className="tituloColumnaUsu">Añadir usuarios</td>
            <td className="tituloColumnaUsu">Modificar usuarios</td>
            <td className="tituloColumnaUsu">Gestionar</td>
          </tr>
          <tbody>
            {usuariosFiltrados.map((usuario) => (
              <tr key={usuario._id}>
                <td className="filaImpar">{usuario._id}</td>
                <td className="filaImpar">{usuario.idUsuario}</td>
                <td className="filaImpar">{usuario.rolUsuario}</td>
                <td className="filaImpar">{usuario.estadoUsuario}</td>
                <td className="filaImpar">
                  <input type="checkbox" checked={usuario.añadirProducto} />{" "}<label className="labelcheck">{`${usuario.añadirProducto}`}</label>
                </td>
                <td className="filaImpar">
                  <input type="checkbox" checked={usuario.modificarProducto} />{" "}<label className="labelcheck">{`${usuario.modificarProducto}`}</label>
                </td>
                <td className="filaImpar">
                  {" "}
                  <input type="checkbox" checked={usuario.añadirUsuario} />{" "}{" "}<label className="labelcheck">{`${usuario.añadirUsuario}`}</label>
                </td>
                <td className="filaImpar">
                  {" "}
                  <input
                    type="checkbox"
                    checked={usuario.modificarUsuario}
                  />{" "}<label className="labelcheck">{`${usuario.modificarUsuario}`}</label>
                </td>
                <td className="filaImpar">
                  <button 
                  >
                    <img class="icono" src={edit} alt="Editar" />
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

export default Usuarios;
