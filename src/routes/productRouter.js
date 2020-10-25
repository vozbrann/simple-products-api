const express = require('express');
const productController = require('../controllers/productController');
const productRouter = express.Router();

productRouter.route('/')
  .get(productController.findAll)
  .post(productController.create);

productRouter.route('/:id')
  .patch(productController.update);

module.exports = productRouter;
