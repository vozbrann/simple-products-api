const productService = require('../services/productService');
module.exports = {
  async findAll(req, res) {
    productService.findAll().then(productsList => {
      res.status(201).send(productsList);
    }).catch(e => {
      console.log(e);
      res.status(400).send(e);
    });
  },
  async create(req, res) {
    productService.create(req.body).then(newProduct => {
      res.status(201).send(newProduct);
    }).catch(e => {
      console.log(e);
      res.status(400).send(e);
    });
  },
  async update(req, res) {
    productService.update(req.params.id, req.body).then(product => {
      res.status(201).send(product);
    }).catch(e => {
      console.log(e);
      res.status(400).send(e);
    });
  },
};
