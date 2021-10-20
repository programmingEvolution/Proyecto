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
import Panel from "./components/Panel";
import Clientes from "./pages/Clientes";
import Usuarios from "./pages/Usuarios";
import RegistrarVenta from "./pages/admin/RegistrarVenta";
import ModificarVenta from "./pages/admin/ModificarVenta";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    <Auth0Provider domain= "proyectoudea.us.auth0.com"
    clientId="HiNKaVomBH1qVo82uVNFZmzLF002bXbF"
    redirectUri="http://localhost:3000/panel" >
    
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
            "/productos",
            "/panel",
            "/clientes",
            "/usuarios",
            "/registrarventa",
            "/modificarventa",
           
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
                <Route path="/modificarcliente">
                  <ModificarCliente></ModificarCliente>
                </Route>
                <Route path="/modificarventa">
                  <ModificarVenta></ModificarVenta>
                </Route>
                <Route path="/clientes">
                  <Clientes></Clientes>
                </Route>
                <Route path="/modificarestadousuario">
                  <ModificarEstadoUsuario></ModificarEstadoUsuario>
                </Route>
                <Route path="/tablaventas">
                  <TablaVenta></TablaVenta>
                </Route>
                <Route path="/registrarventa">
                  <RegistrarVenta></RegistrarVenta>
                </Route>
                <Route path="/usuarios">
                  <Usuarios></Usuarios>
                </Route>
                <Route path="/stock">
                  <StockProductos></StockProductos>
                </Route>
                <Route path="/productos">
                  <Productos></Productos>
                </Route>
                <Route path="/panel">
                  <Panel></Panel>
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
  </Auth0Provider>
  );
}

export default App;
