'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Suspension extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Suspension.init({
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Suspension',
  });
  return Suspension;
};