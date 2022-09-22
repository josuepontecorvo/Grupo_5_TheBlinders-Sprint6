'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Category);
      this.belongsTo(models.Type);
      this.belongsTo(models.Color);
      this.belongsTo(models.Brand);
      this.belongsTo(models.Size);
      this.belongsTo(models.Shift);
      this.belongsTo(models.Frame);
      this.belongsTo(models.WheelSize);
      this.belongsTo(models.Suspension);
      this.belongsTo(models.Brake);
      this.hasMany(models.Image);
    }
  }
  Product.init({
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    info: {
      type: DataTypes.TEXT,
      defaultValue: null
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue: null
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    typeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    stockMin: {
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    stockMax: {
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    colorId: {
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    brandId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sizeId: {
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    shiftId: {
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    frameId: {
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    wheelSizeId: {
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    suspensionId: {
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    brakeId: {
      type: DataTypes.INTEGER,
      defaultValue: null
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};