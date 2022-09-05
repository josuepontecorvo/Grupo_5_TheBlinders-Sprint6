'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Role);
    }
  }
  User.init({
    firstName: DataTypes.TEXT,
    lastName: DataTypes.TEXT,
    birthdate: DataTypes.DATE,
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
    image: DataTypes.TEXT,
    roleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};