const express = require('express');
const orderController = require('../controllers/orderController');
const orderRouter = express.Router();

orderRouter.route('/')
  .get(orderController.findAll);

orderRouter.route('/:id')
  .post(orderController.create);

module.exports = orderRouter;
