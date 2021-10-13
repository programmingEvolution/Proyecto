// hacer el import de express tradicional
// const express = require('express');

// hacer el nuevo import
import dotenv from "dotenv";
import Express from "express";
import Cors from "cors";
import { connectServer } from "./db/db.js";
import rutasProducto from "./views/products/route.js";
import rutasUsuario from "./views/users/route.js";
import rutasVentas from "./views/sale/router.js";


dotenv.config({ path: "./config.env" });

const app = Express();

app.use(Express.json());
app.use(Cors());
app.use(rutasProducto);
app.use(rutasUsuario);
app.use(rutasVentas);


const main = () => {
  return app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
  });
};

connectServer(main);