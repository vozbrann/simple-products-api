const {Product} = require('../models');

module.exports = {
  findAll() {
    return new Promise(async (resolve, reject) => {
      try {
        const productsList = await Product.findAll();
        resolve(productsList);
      } catch (e) {
        const {message} = e;
        reject({message});
      }
    });
  },
  create(product) {
    return new Promise(async (resolve, reject) => {
      try {
        product.price = (parseFloat(product.price));
        const newProduct = await Product.create(product);
        resolve(newProduct);
      } catch (e) {
        const {message} = e;
        reject({message});
      }
    });
  },
  update(id, product) {
    return new Promise(async (resolve, reject) => {
      try {
        const num = await Product.update(product, {
          where: {
            id: id,
          },
        });
        if (num[0] === 1) {
          resolve({
            message: 'Success',
          });
        } else {
          reject({
            message: 'Not found',
          });
        }
      } catch (e) {
        const {message} = e;
        reject({message});
      }
    });
  },
};
