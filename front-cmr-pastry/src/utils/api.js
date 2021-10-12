import axios from "axios";

export const crearProducto = async (data, successCallback, errorCallback) => {
  const options = {
    method: "POST",
    url: "http://localhost:5000/productos/",
    headers: { "Content-Type": "application/json" },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerProductos = async (successCallback, errorCallback) => {
    const options = { method: 'GET', url: 'http://localhost:5000/productos/' };
    await axios.request(options).then(successCallback).catch(errorCallback);
    
  };