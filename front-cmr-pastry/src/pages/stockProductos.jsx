import { Link } from "react-router-dom";
import muffinManzana from "../media/muffinManzana.jpeg";
import muffinZanahoria from "../media/muffinZanahoria.jpeg";
import TortaCircularGrande from "../media/TortaCircularGrande.jpeg";

const StockProductos = () => {
  return (
    <div className="contenedorStock">
      <section>
        <ul className="contenedorBotonesgrises">
          <li className="buscadoresGrises">Filtrar</li>
          <li className="buscadoresGrises">Buscar</li>
          <Link to="registrarventa">
            <li className="botonesGrises">Añadir a la venta</li>
          </Link>
        </ul>
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
