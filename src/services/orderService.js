const {Order, Product} = require('../models');

module.exports = {
  findAll() {
    return new Promise(async (resolve, reject) => {
      try {
        const ordersList = await Order.findAll({
          include: "Product"
        });
        resolve(ordersList);
      } catch (e) {
        const {message} = e;
        reject({message});
      }
    });
  },
  create(productId, userData) {
    return new Promise(async (resolve, reject) => {
      try {
        const product = await Product.findOne({
          where: {
            id: productId
          },
        });
        if (!product) {
          reject({
            message: "Product not found"
          });
        }
        const order = await Order.create(userData);
        await product.addOrder(order);
        resolve({
          message: "Success"
        });

      } catch (e) {
        const {message} = e;
        reject({message});
      }
    });
  },
};
