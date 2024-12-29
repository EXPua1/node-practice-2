import { response } from 'express';
import createHttpError from 'http-errors';

import * as s from '../services/products.js';

export const getProducts = async (req, res) => {
  const data = await s.getProducts();

  res.status(200).json({
    status: 200,
    message: 'Succesfully found products',
    responseData: data,
  });
};

export const getProductsById = async (req, res) => {
  const { id } = req.params;

  const data = await s.getProductsById(id);

  if (!data) {
    throw createHttpError(404, `Product with id:${id} not found`);
  }
  res.status(200).json({
    status: 200,
    message: `Succesfully found product by id:${id}`,
    responseData: data,
  });
};

export const addProduct = async (req, res) => {
  const product = await s.addProduct(req.body);

  res.status(201).json({
    status: 201,
    message: 'Succesfully added product',
    responseData: product,
  });
};
