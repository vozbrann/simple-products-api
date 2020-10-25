module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Order', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    number: {
      type: DataTypes.STRING,
    }
  });
};
