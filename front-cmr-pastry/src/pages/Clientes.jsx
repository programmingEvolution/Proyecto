import { Link } from "react-router-dom";
import edit from "../media/edit.png";
import ContenedorTitulos from "../components/ContenedorTitulos";

const Clientes = () => {
  return (
    <div>
      <section>
        <ContenedorTitulos Titulo="Gestión de Clientes" />
      </section>
      <section>
        <ul className="contenedorBotonesgrises">
          <form>
            <section>
              <label className="labelForm" htmlFor="idCliente">
                Buscar Cliente:
              </label>
              <input
                className="inputForm"
                id="idCliente"
                placeholder="Ingrese el nombre del Cliente"
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
        <Link to="registrarcliente">
          <button className="buttonForm">Nuevo Cliente</button>
        </Link>
      </section>

      <section>
        <table>
          <tr>
            <td className="tituloColumnaCliente">ID Cliente</td>
            <td className="tituloColumnaCliente">Nombre</td>
            <td className="tituloColumnaCliente">Telefono</td>
            <td className="tituloColumnaCliente">correo</td>
            <td className="tituloColumnaCliente">Editar</td>
          </tr>
          <tr>
            <td className="filaImparCliente">123456789123</td>
            <td className="filaImparCliente">Edna Gonzalez</td>
            <td className="filaImparCliente">5720784</td>
            <td className="filaImparCliente">ednag@gmail.com</td>
            <Link to="/modificarcliente">
              <span>
                <img class="icono" src={edit} alt="Editar" />
              </span>
            </Link>
          </tr>
          <tr>
            <td className="filaParCliente">123456789124</td>
            <td className="filaParCliente">Mauricio Peña</td>
            <td className="filaParCliente">9874562</td>
            <td className="filaParCliente">mauro@gmail.com</td>
            <Link to="/modificarcliente">
              <span>
                <img class="icono" src={edit} alt="Editar" />
              </span>
            </Link>
          </tr>
          <tr>
            <td className="filaImparCliente">123456789125</td>
            <td className="filaImparCliente">Juan Silva</td>
            <td className="filaImparCliente">5720784</td>
            <td className="filaImparCliente">juan@gmail.com</td>
            <Link to="/modificarestadousuario">
              <span>
                <img class="icono" src={edit} alt="Editar" />
              </span>
            </Link>
          </tr>
          <tr>
            <td className="filaParCliente">123456789126</td>
            <td className="filaParCliente"> Gloria Parra</td>
            <td className="filaParCliente">5720784</td>
            <td className="filaParCliente">gloria@gmail.com</td>
            <Link to="/modificarestadousuario">
              <span>
                <img class="icono" src={edit} alt="Editar" />
              </span>
            </Link>
          </tr>
          <tr>
            <td className="filaImparCliente">1234567891237</td>
            <td className="filaImparCliente">Dolores Castro</td>
            <td className="filaImparCliente">5720784</td>
            <td className="filaImparCliente">Dolores@gmail.com</td>
            <Link to="/modificarestadousuario">
              <span>
                <img class="icono" src={edit} alt="Editar" />
              </span>
            </Link>
          </tr>
          <tr>
            <td className="filaParCliente">1234567891237</td>
            <td className="filaParCliente">Pedro Garcia</td>
            <td className="filaParCliente">5720784</td>
            <td className="filaParCliente">Pedro@gmail.com</td>
            <Link to="/modificarestadousuario">
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

export default Clientes;
