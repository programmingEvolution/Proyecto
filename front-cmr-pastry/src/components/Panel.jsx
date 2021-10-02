import React from "react";

import house from "./img/house.png";

import ventas from "./img/ventas.png";

import grupo from "./img/grupo.png";
import clientes from "./img/clientes.png";
import { Link } from "react-router-dom";

const Panel = () => {
  return (
    <div className="contenedorFormulario">
      <h2 class="dash-title">Panel De Control</h2>

      <div class="dash-cards">
        <div class="card-single">
          <div class="card-body">
            <Link to="/tablaventas">
              <span>
                <img src={ventas} alt="" />
              </span>
            </Link>
            <div>
              <h5>40</h5>
              <h4>Ventas</h4>
            </div>
          </div>
          <div class="card-footer">
            <a href="/registro-venta.html">Ver Todas</a>
          </div>
        </div>

        <div class="card-single">
          <div class="card-body">
            <span>
              <img src={house} alt="" />
            </span>
            <div>
              <h5>20</h5>
              <h4>Pedidos</h4>
            </div>
          </div>
          <div class="card-footer">
            <a href="">Ver Todos</a>
          </div>
        </div>

        <div class="card-single">
          <div class="card-body">
            <span>
              <img src={house} alt="" />
            </span>
            <div>
              <h5>$200.000</h5>
              <h4>Ingresos</h4>
            </div>
          </div>
          <div class="card-footer">
            <a href="">Ver Todo</a>
          </div>
        </div>
      </div>

      <section class="resumen">
        <div class="activity-grid">
          <div class="activity-card">
            <h3>Últimas Ventas</h3>

            <div class="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>Venta</th>
                    <th>Fecha de venta</th>
                    <th>Costo final</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Muffins</td>
                    <td>28 Sept, 2021</td>
                    <td>$15.000</td>
                    <td>
                      <span class="badge exitoso">Finalizada</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Torta Circular Grande</td>
                    <td>28 Sept, 2021</td>
                    <td>$35.400</td>

                    <td>
                      <span class="badge pendiente">En proceso</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Mini Torta, Muffins</td>
                    <td>27 Sept, 2021</td>
                    <td>$42,400</td>
                    <td>
                      <span class="badge exitoso">Despachada</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Torta en Espiral Grande</td>
                    <td>27 Sept, 2021</td>
                    <td>$50.000</td>
                    <td>
                      <span class="badge pendiente">En Proceso</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Muffins, Chocolates</td>
                    <td>26 Sept, 2021</td>
                    <td>$22.500</td>
                    <td>
                      <span class="badge exitoso">Finalizada</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="summary">
            <div class="summary-card">
              <h3>Resumen del Mes</h3>
              <div class="summary-single">
                <span>
                  <img src={clientes} alt="" />
                </span>
                <div>
                  <h5>20</h5>
                  <small>Nuevos Clientes</small>
                </div>
              </div>
              <div class="summary-single">
                <span>
                  <img src={clientes} alt="" />
                </span>
                <div>
                  <h5>$450.000</h5>
                  <small>En ingresos</small>
                </div>
              </div>
              <div class="summary-single">
                <span>
                  <img src={grupo} alt="" />
                </span>
                <div>
                  <h5>160</h5>
                  <small>Pedidos completados</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Panel;
