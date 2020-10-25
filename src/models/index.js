const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const db = {};

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite',
});

fs.readdirSync(__dirname).filter((file) =>
  file !== 'index.js',
).forEach((file) => {
  const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
  db[model.name] = model;
});

Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Product.hasMany(db.Order);
db.Order.belongsTo(db.Product);

module.exports = db;
