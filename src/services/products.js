import { ProductsCollection } from '../db/product.js';

export const getProducts = async (query = {}) => {
  const data = await ProductsCollection.find(query);
  return data;
};

export const getProductsById = async (id) => {
  const data = await ProductsCollection.findById(id);
  return data;
};

export const addProduct = async (body) => {
  const product = await ProductsCollection.create(body);
  return product;
};
