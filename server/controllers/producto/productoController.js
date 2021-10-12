import { getDB } from '../../db/db.js';


const getAllProducts = async (callback) => {
  const baseDeDatos = getDB();
  await baseDeDatos.collection('productos').find().limit(50).toArray(callback);
};

const createProduct = async (datosProducto, callback) => {
  const baseDeDatos = getDB();
  console.log('llaves: ', Object.keys(datosProducto));
  if (
    Object.keys(datosProducto).includes('name') &&
    Object.keys(datosProducto).includes('proveedor') &&
    Object.keys(datosProducto).includes('precio') &&
    Object.keys(datosProducto).includes('cantidad')
  ) {
    await baseDeDatos.collection('productos').insertOne(datosProducto, callback);
  } else {
    return { err: 'conditions not met', result: '' };
  }
};

export { getAllProducts, createProduct};