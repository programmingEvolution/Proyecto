import Express from "express";
import {

  createProduct,
  getAllProducts,
} from "../../controllers/producto/productoController.js";

const rutasProducto = Express.Router();

const genericCallback = (res) => (err, result) => {
  if (err) {
    res.status(500).send(err);
  } else {
    res.json(result);
  
  }
};

rutasProducto.route("/productos").get((req, res) => {
  getAllProducts(genericCallback(res));
});

rutasProducto.route('/productos').post((req, res) => {
  createProduct(req.body, genericCallback(res));
});

export default rutasProducto;
