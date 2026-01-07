const express = require("express");
const ProductModel = require("../models/ProductModel");

const getAllProducts = (req, res) => {
  const products = ProductModel.find();
  res.status(200).json(products);
};

const getProductById = (req, res) => {
  const productId = req.params.id;
  const product = ProductModel.findById(productId);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.status(200).json(product);
};

module.exports = {
  getAllProducts,
  getProductById,
};
