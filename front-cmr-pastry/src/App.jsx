import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ModificarCliente from "./pages/ModificarCliente";
import ModificarEstadoUsuario from "./pages/ModificarEstadoUsuario";
import ResgistrarCliente from "./pages/RegistrarCliente";
import RegistrarProducto from "./pages/RegistrarProducto";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/registrarproducto">
            <RegistrarProducto></RegistrarProducto>
          </Route>
          <Route path="/modificarproducto">
            <ModificarCliente></ModificarCliente>
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
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
