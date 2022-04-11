'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Concert extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Concert.init({
    date: DataTypes.STRING,
    location: DataTypes.STRING,
    venueCap: DataTypes.STRING,
    singer: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Concert',
    tableName: 'concert'
  });
  return Concert;
};