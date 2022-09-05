'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      model: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL
      },
      discount: {
        type: Sequelize.INTEGER
      },
      info: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      categoryId: {
        type: Sequelize.INTEGER
      },
      typeId: {
        type: Sequelize.INTEGER
      },
      stock: {
        type: Sequelize.INTEGER
      },
      stockMin: {
        type: Sequelize.INTEGER
      },
      stockMax: {
        type: Sequelize.INTEGER
      },
      colorId: {
        type: Sequelize.INTEGER
      },
      brandId: {
        type: Sequelize.INTEGER
      },
      sizeId: {
        type: Sequelize.INTEGER
      },
      shiftId: {
        type: Sequelize.INTEGER
      },
      frameId: {
        type: Sequelize.INTEGER
      },
      wheelSizeId: {
        type: Sequelize.INTEGER
      },
      suspensionId: {
        type: Sequelize.INTEGER
      },
      brakeId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};