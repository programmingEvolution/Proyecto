import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import PublicLayout from "./layout/PublicLayout";
import Login from "./pages/Login";
import ModificarCliente from "./pages/admin/ModificarCliente";
import ModificarEstadoUsuario from "./pages/admin/ModificarEstadoUsuario";
import ModificarProducto from "./pages/admin/ModificarProducto";
import ResgistrarCliente from "./pages/admin/RegistrarCliente";
import RegistrarProducto from "./pages/admin/RegistrarProducto";
import TablaVenta from "./pages/admin/TablaVenta";
import Index from "./pages/Index";
import StockProductos from "./pages/StockProductos";
import Productos from "./pages/Productos";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            path={[
              "/registrarproducto",
              "/modificarproducto",
              "/registrarcliente",
              "/modificarCliente",
              "/modificarestadousuario",
              "/tablaventas",
              "/stock",
              "/productos"
            ]}
          >
            <Switch>
              <Layout>
                <Switch>
                  <Route path="/registrarproducto">
                    <RegistrarProducto></RegistrarProducto>
                  </Route>
                  <Route path="/modificarproducto">
                    <ModificarProducto></ModificarProducto>
                  </Route>
                  <Route path="/registrarcliente">
                    <ResgistrarCliente></ResgistrarCliente>
                  </Route>
                  <Route path="/modificarCliente">
                    <ModificarCliente></ModificarCliente>
                  </Route>
                  <Route path="/modificarestadousuario">
                    <ModificarEstadoUsuario></ModificarEstadoUsuario>
                  </Route>
                  <Route path="/tablaventas">
                    <TablaVenta></TablaVenta>
                  </Route>
                  <Route path="/stock">
                    <StockProductos></StockProductos>
                  </Route>
                  <Route path="/productos">
                    <Productos></Productos>
                  </Route>
                  <Route path="/login">
                    <Login></Login>
                  </Route>
                </Switch>
              </Layout>
            </Switch>
          </Route>

          <Route path={["/", "/login"]}>
            <Switch>
              <PublicLayout>
                <Switch>
                  <Route path="/login">
                    <Login></Login>
                  </Route>
                  <Route path="/">
                    <Index></Index>
                  </Route>
                </Switch>
              </PublicLayout>
            </Switch>
          </Route>
        </Switch>{" "}
      </Router>
    </div>
  );
}

export default App;
