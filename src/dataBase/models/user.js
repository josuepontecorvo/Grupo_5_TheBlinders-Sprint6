const moment = require('moment');
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
    firstName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.DATE,
      get() {
        return moment(this.getDataValue('birthdate')).format("YYYY-MM-DD")},
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      defaultvalue: "default-user.png",
    },
    roleId: {
      type: DataTypes.INTEGER,
      defaultValue: 2
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};