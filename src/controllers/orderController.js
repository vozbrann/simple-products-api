const orderService = require('../services/orderService');
module.exports = {
  async findAll(req, res) {
    orderService.findAll().then(ordersList => {
      res.status(201).send(ordersList);
    }).catch(e => {
      console.log(e);
      res.status(400).send(e);
    });
  },
  async create(req, res) {
    orderService.create(req.params.id, req.body).then(order => {
      res.status(201).send(order);
    }).catch(e => {
      console.log(e);
      res.status(400).send(e);
    });
  }
};
