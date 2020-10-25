const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const db = require('./src/models');
const router = require('./src/routes');

const productService = require('./src/services/productService');

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

app.use('/', router);

// starting the server
db.sequelize.sync({force: true}).then(() => {
  init();
  app.listen(3001, () => {
    console.log(`Server start at port: 3001`);
  });
});

const init = () => {
  const products = [
    {
      name: 'Orange Juice',
      category: 'Drinks',
      price: 14.99
    },
    {
      name: 'Apples',
      category: 'fruits',
      price: 4.99
    },
    {
      name: 'Tomatos',
      category: 'vegetables',
      price: 6.39
    },
    {
      name: 'Coffee',
      category: 'Drinks',
      price: 3.15
    },
    {
      name: 'Sweet Paper',
      category: 'Vegetables',
      price: 12.15
    },
    {
      name: 'Grapes',
      category: 'FRUITS',
      price: 20.49
    },
    {
      name: 'Pears',
      category: 'Fruits',
      price: 1.35
    },
    {
      name: 'Team',
      category: 'Drinks',
      price: 0.4
    }
  ];

  products.forEach(product => {
    productService.create(product);
  });
};
