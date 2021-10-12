import { getDB } from '../../db/db.js';
import { ObjectId } from 'mongodb';

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

const editProduct = async (productoId, data, callback) => {
  const filtroProducto = { _id: new ObjectId(productoId) };
  const operacion = {
    $set: data,
  };
  const baseDeDatos = getDB();
  await baseDeDatos
    .collection('productos')
    .findOneAndUpdate(filtroProducto, operacion, { upsert: true, returnOriginal: true }, callback);
};

const deleteProduct = async (productoId, callback) => {
  const filtroProducto = { _id: new ObjectId(productoId) };
  const baseDeDatos = getDB();
  await baseDeDatos.collection('productos').deleteOne(filtroProducto, callback);
};


export { getAllProducts, createProduct, editProduct, deleteProduct};