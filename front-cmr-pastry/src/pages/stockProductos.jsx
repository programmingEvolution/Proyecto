import { Link } from "react-router-dom";
import muffinManzana from "../media/muffinManzana.jpeg";
import muffinZanahoria from "../media/muffinZanahoria.jpeg";
import TortaCircularGrande from "../media/TortaCircularGrande.jpeg";
import ContenedorTitulos from "../components/ContenedorTitulos";

const StockProductos = () => {
  return (
    <div className="contenedorStock">
      <section>
        <ContenedorTitulos Titulo="Stock de productos" />
      </section>
      <section>
        <ul className="contenedorBotonesgrises">
          <form>
            <section>
              <label className="labelForm" htmlFor="idProducto">
                Buscar Producto:
              </label>
              <input
                className="inputForm"
                id="idProducto"
                placeholder="Ingrese el nombre del producto"
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
        <Link to="registrarventa">
          <button className="buttonForm">Añadir a la venta</button>
        </Link>
      </section>
      <section className="contenedorFormulario">
        <div className="tarjetasProductos">
          <input type="checkbox" />
          <ul className="contenedorTarjetasPro">
            <li>
              <img
                className="elementos1"
                src={muffinManzana}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={muffinZanahoria}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={TortaCircularGrande}
                alt="foto muffin"
              />
            </li>

            <li className="elementos2">
              <ul className="contenidoProducto">
                Muffins
                <li className="contenidoProducto">
                  Sabores: Zanahoria, manzana, banano y maracuyá.{" "}
                </li>
                <li className="contenidoProducto">$ / unidad:</li>
              </ul>
            </li>
            <li className="identificador">ID 0001</li>
          </ul>
        </div>

        <div className="tarjetasProductos">
          <input type="checkbox" />
          <ul className="contenedorTarjetasPro">
            <li>
              <img
                className="elementos1"
                src={muffinManzana}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={muffinZanahoria}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={TortaCircularGrande}
                alt="foto muffin"
              />
            </li>

            <li className="elementos2">
              <ul className="contenidoProducto">
                Mini Muffins
                <li className="contenidoProducto">
                  Sabores: Zanahoria, manzana, banano y maracuyá.{" "}
                </li>
                <li className="contenidoProducto">$ / unidad:</li>
              </ul>
            </li>
            <li className="identificador">ID 0002</li>
          </ul>
        </div>

        <div className="tarjetasProductosNoDispo">
          <input type="checkbox" disabled />
          <ul className="contenedorTarjetasPro">
            <li>
              <img
                className="elementos1"
                src={muffinManzana}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={muffinZanahoria}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={TortaCircularGrande}
                alt="foto muffin"
              />
            </li>
            <li className="elementos2">
              <ul className="contenidoProducto">
                Torta circular grande
                <li className="contenidoProducto">
                  Sabores: Zanahoria, manzana, banano y maracuyá.{" "}
                </li>
                <li className="contenidoProducto">$ / unidad:</li>
              </ul>
            </li>
            <li className="identificador">ID 0003</li>
          </ul>
        </div>

        <div className="tarjetasProductos">
          <input type="checkbox" />
          <ul className="contenedorTarjetasPro">
            <li>
              <img
                className="elementos1"
                src={muffinManzana}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={muffinZanahoria}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={TortaCircularGrande}
                alt="foto muffin"
              />
            </li>
            <li className="elementos2">
              <ul className="contenidoProducto">
                Torta circular mediana
                <li className="contenidoProducto">
                  Sabores: Zanahoria, manzana, banano y maracuyá.{" "}
                </li>
                <li className="contenidoProducto">$ / unidad:</li>
              </ul>
            </li>
            <li className="identificador">ID 0004</li>
          </ul>
        </div>

        <div className="tarjetasProductos">
          <input type="checkbox" />
          <ul className="contenedorTarjetasPro">
            <li>
              <img
                className="elementos1"
                src={muffinManzana}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={muffinZanahoria}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={TortaCircularGrande}
                alt="foto muffin"
              />
            </li>
            <li className="elementos2">
              <ul className="contenidoProducto">
                Torta circular pequeña
                <li className="contenidoProducto">
                  Sabores: Zanahoria, manzana, banano y maracuyá.{" "}
                </li>
                <li className="contenidoProducto">$ / unidad:</li>
              </ul>
            </li>
            <li className="identificador">ID 0005</li>
          </ul>
        </div>

        <div className="tarjetasProductos">
          <input type="checkbox" />
          <ul className="contenedorTarjetasPro">
            <li>
              <img
                className="elementos1"
                src={muffinManzana}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={muffinZanahoria}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={TortaCircularGrande}
                alt="foto muffin"
              />
            </li>
            <li className="elementos2">
              <ul className="contenidoProducto">
                Mini Torta
                <li className="contenidoProducto">
                  Sabores: Zanahoria, manzana, banano y maracuyá.{" "}
                </li>
                <li className="contenidoProducto">$ / unidad:</li>
              </ul>
            </li>
            <li className="identificador">ID 0006</li>
          </ul>
        </div>

        <div className="tarjetasProductos">
          <input type="checkbox" />
          <ul className="contenedorTarjetasPro">
            <li>
              <img
                className="elementos1"
                src={muffinManzana}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={muffinZanahoria}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={TortaCircularGrande}
                alt="foto muffin"
              />
            </li>
            <li className="elementos2">
              <ul className="contenidoProducto">
                Torta en forma de Flor
                <li className="contenidoProducto">
                  Sabores: Zanahoria, manzana, banano y maracuyá.{" "}
                </li>
                <li className="contenidoProducto">$ / unidad:</li>
              </ul>
            </li>
            <li className="identificador">ID 0007</li>
          </ul>
        </div>

        <div className="tarjetasProductos">
          <input type="checkbox" />
          <ul className="contenedorTarjetasPro">
            <li>
              <img
                className="elementos1"
                src={muffinManzana}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={muffinZanahoria}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={TortaCircularGrande}
                alt="foto muffin"
              />
            </li>
            <li className="elementos2">
              <ul className="contenidoProducto">
                Torta en espiral pequeña
                <li className="contenidoProducto">
                  Sabores: Zanahoria, manzana, banano y maracuyá.{" "}
                </li>
                <li className="contenidoProducto">$ / unidad:</li>
              </ul>
            </li>
            <li className="identificador">ID 0008</li>
          </ul>
        </div>

        <div className="tarjetasProductos">
          <input type="checkbox" />
          <ul className="contenedorTarjetasPro">
            <li>
              <img
                className="elementos1"
                src={muffinManzana}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={muffinZanahoria}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={TortaCircularGrande}
                alt="foto muffin"
              />
            </li>
            <li className="elementos2">
              <ul className="contenidoProducto">
                Galletas de mantequilla
                <li className="contenidoProducto">
                  Sabores: Zanahoria, manzana, banano y maracuyá.{" "}
                </li>
                <li className="contenidoProducto">$ / unidad:</li>
              </ul>
            </li>
            <li className="identificador">ID 0009</li>
          </ul>
        </div>

        <div className="tarjetasProductos">
          <ul className="contenedorTarjetasPro">
            <li>
              <img
                className="elementos1"
                src={muffinManzana}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={muffinZanahoria}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={TortaCircularGrande}
                alt="foto muffin"
              />
            </li>
            <li className="elementos2">
              <ul className="contenidoProducto">
                Galletas de chips de chocolate
                <li className="contenidoProducto">
                  Sabores: Zanahoria, manzana, banano y maracuyá.{" "}
                </li>
                <li className="contenidoProducto">$ / unidad:</li>
              </ul>
            </li>
            <li className="identificador">ID 00010</li>
          </ul>
        </div>

        <div className="tarjetasProductos">
          <input type="checkbox" />
          <ul className="contenedorTarjetasPro">
            <li>
              <img
                className="elementos1"
                src={muffinManzana}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={muffinZanahoria}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={TortaCircularGrande}
                alt="foto muffin"
              />
            </li>
            <li className="elementos2">
              <ul className="contenidoProducto">
                Chocolates
                <li className="contenidoProducto">
                  Sabores: Zanahoria, manzana, banano y maracuyá.{" "}
                </li>
                <li className="contenidoProducto">$ / unidad:</li>
              </ul>
            </li>
            <li className="identificador">ID 00011</li>
          </ul>
        </div>
        <div className="tarjetasProductos">
          <input type="checkbox" />
          <ul className="contenedorTarjetasPro">
            <li>
              <img
                className="elementos1"
                src={muffinManzana}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={muffinZanahoria}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={TortaCircularGrande}
                alt="foto muffin"
              />
            </li>
            <li className="elementos2">
              <ul className="contenidoProducto">
                Cakecicles
                <li className="contenidoProducto">
                  Sabores: Zanahoria, manzana, banano y maracuyá.{" "}
                </li>
                <li className="contenidoProducto">$ / unidad:</li>
              </ul>
            </li>
            <li className="identificador">ID 00012</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default StockProductos;
