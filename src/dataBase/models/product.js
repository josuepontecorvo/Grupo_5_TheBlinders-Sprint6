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
    model: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    discount: DataTypes.INTEGER,
    info: DataTypes.TEXT,
    description: DataTypes.TEXT,
    categoryId: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    stockMin: DataTypes.INTEGER,
    stockMax: DataTypes.INTEGER,
    colorId: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER,
    sizeId: DataTypes.INTEGER,
    shiftId: DataTypes.INTEGER,
    frameId: DataTypes.INTEGER,
    wheelSizeId: DataTypes.INTEGER,
    suspensionId: DataTypes.INTEGER,
    brakeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};