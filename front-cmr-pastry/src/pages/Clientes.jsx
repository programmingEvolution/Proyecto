import { Link } from "react-router-dom";

const Clientes = () => {
  return (
    <div className="contenedorFormulario">
      <section>
        <ul className="contenedorBotonesgrises">
          <li className="buscadorEspecificoCliente">Buscar ID cliente</li>
          <Link to="registrarcliente">
            <li className="botonNuevoCliente">Nuevo Cliente</li>
          </Link>
        </ul>
      </section>

      <section className="correrTablaCliente">
        <table>
          <tr>
            <td className="tituloColumnaCliente">ID Cliente</td>
            <td className="tituloColumnaCliente">Nombre</td>
            <td className="tituloColumnaCliente">Telefono</td>
            <td className="tituloColumnaCliente">correo</td>
            <td className="tituloColumnaCliente">Acciones</td>
          </tr>
          <tr>
            <td className="filaImparCliente">123456789123</td>
            <td className="filaImparCliente">Edna Gonzalez</td>
            <td className="filaImparCliente">5720784</td>
            <td className="filaImparCliente">ednag@gmail.com</td>
            <td className="filaImparCliente">Mod-Elim</td>
          </tr>
          <tr>
            <td className="filaParCliente">123456789124</td>
            <td className="filaParCliente">Mauricio Peña</td>
            <td className="filaParCliente">9874562</td>
            <td className="filaParCliente">mauro@gmail.com</td>
            <td className="filaParCliente">Mod-Elim</td>
          </tr>
          <tr>
            <td className="filaImparCliente">123456789125</td>
            <td className="filaImparCliente">Juan Silva</td>
            <td className="filaImparCliente">5720784</td>
            <td className="filaImparCliente">juan@gmail.com</td>
            <td className="filaImparCliente">Mod-Elim</td>
          </tr>
          <tr>
            <td className="filaParCliente">123456789126</td>
            <td className="filaParCliente"> Gloria Parra</td>
            <td className="filaParCliente">5720784</td>
            <td className="filaParCliente">gloria@gmail.com</td>
            <td className="filaParCliente">Mod-Elim</td>
          </tr>
          <tr>
            <td className="filaImparCliente">1234567891237</td>
            <td className="filaImparCliente">Dolores Castro</td>
            <td className="filaImparCliente">5720784</td>
            <td className="filaImparCliente">Dolores@gmail.com</td>
            <td className="filaImparCliente">Mod-Elim</td>
          </tr>
          <tr>
            <td className="filaParCliente">1234567891237</td>
            <td className="filaParCliente">Pedro Garcia</td>
            <td className="filaParCliente">5720784</td>
            <td className="filaParCliente">Pedro@gmail.com</td>
            <td className="filaParCliente">Mod-Elim</td>
          </tr>
        </table>
      </section>
    </div>
  );
};

export default Clientes;
