import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import ModificarCliente from "./pages/admin/ModificarCliente";
import ModificarEstadoUsuario from "./pages/admin/ModificarEstadoUsuario";
import ModificarProducto from "./pages/admin/ModificarProducto";
import ResgistrarCliente from "./pages/admin/RegistrarCliente";
import RegistrarProducto from "./pages/admin/RegistrarProducto";
import TablaVenta from "./pages/admin/TablaVenta"



function App() {
  return (
    <div>
      <Router>
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
          
        </Switch>

        </Layout>
      </Router>
    </div>
  );
}

export default App;
