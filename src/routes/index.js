const express = require('express');
const router = express.Router();

const orderRouter = require('./orderRouter');
const productRouter = require('./productRouter');

router.use("/products", productRouter);
router.use("/orders", orderRouter);

router.use(function(req, res, next) {
  res.status(404).send('Not Found');
});


module.exports = router;
