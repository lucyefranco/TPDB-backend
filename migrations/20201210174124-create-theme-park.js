'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('themeParks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      operatingCompany: {
        type: Sequelize.STRING
      },
      openingDate: {
        type: Sequelize.DATEONLY
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      about: {
        type: Sequelize.TEXT
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('themeParks');
  }
};