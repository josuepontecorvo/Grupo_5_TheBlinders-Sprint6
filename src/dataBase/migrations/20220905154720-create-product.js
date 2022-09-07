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
        type: Sequelize.INTEGER,
        references: {
          model: "Categories",
          key: "id"
        }
      },
      typeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Types",
          key: "id"
        }
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
        type: Sequelize.INTEGER,
        references: {
          model: "Colors",
          key: "id"
        }
      },
      brandId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Brands",
          key: "id"
        }
      },
      sizeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Sizes",
          key: "id"
        }
      },
      shiftId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Shifts",
          key: "id"
        }
      },
      frameId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Frames",
          key: "id"
        }
      },
      wheelSizeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "WheelSizes",
          key: "id"
        }
      },
      suspensionId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Suspensions",
          key: "id"
        }
      },
      brakeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Brakes",
          key: "id"
        }
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