import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="logo">
        <img src="./media/pastrylogo.png" class="logop" alt="logo" />
      </div>
      <div className="login">
        <h1>Ingresa ID y contraseña</h1>
        <form>
          <label for="usuario">Usuario</label>
          <input type="text" placeholder="Ingresa usuario"></input>
          <br></br>

          <label for="contraseña"></label>
          <input type="password" placeholder="Ingresa contraseña"></input>

          <br></br>

          <section className="flex flex-grow  justify-around">
            <section>
              <Link to="/panel">
              <button className="" type="submit">
                Ingresar
              </button>
              </Link>
              <br />
            </section>
            <section className="flex">
              <p>O ingresar con:</p>

              <button className="" type="button">
                <img
                  className="iconoG"
                  src="./media/Google.png"
                  alt="logoGoogle"
                />
                <a href="https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button&flowName=GlifWebSignIn&flowEntry=ServiceLogin"></a>
              </button>
            </section>
          </section>
        </form>
      </div>
      <div></div>
      <div id="pie"></div>
    </div>
  );
};

export default Login;
