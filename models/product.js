'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.price,{
        foreignKey:"id_product",
      })
    }
  }
  product.init({
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: DataTypes.STRING,
    product_price: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'product',
  });
  
  return product;
};

