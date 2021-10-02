import React from "react";
import usuarios from "../media/usuarios.jpeg";
import ventas from "../media/ventas.jpeg";
import tortaEspiralGrande from "../media/tortaEspiralGrande.jpeg";
import clientes from "../media/clientes.jpeg";

const Index = () => {
  return (
    <div className="contedorStock">
      <section>
        <section>
          <h1 class="tituloHome">Admin Juli's Pastry</h1>
          <p class="introduccion">
            Aplicacion web de administracion de ventas para una empresa en
            crecimiento, donde se logra tener control de la gestion de roles de
            usuarios, productos, clientes, ventas, informes mensuales. Con
            diferentes herramientas para visuaizar el flujo de productos y
            manejo de bases de datos.
          </p>
        </section>

        <section flex>
          <h2 class="herramientas">Herramientas</h2>
          <div>
            <ul class="contenedorTarjetasHome">
              <li class="tarjetas">
                Gestion de Usuarios
                <img class="fotosHome" src={usuarios} alt="foto muffin" />
              </li>
              <li class="tarjetas">
                Gestion de ventas
                <img class="fotosHome" src={ventas} alt="foto muffin" />
              </li>
              <li class="tarjetas">
                Gestion de productos
                <img
                  class="fotosHome"
                  src={tortaEspiralGrande}
                  alt="foto muffin"
                />
              </li>
              <li class="tarjetas">
                Gestion de clientes
                <img class="fotosHome" src={clientes} alt="foto muffin" />
              </li>
            </ul>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Index;
