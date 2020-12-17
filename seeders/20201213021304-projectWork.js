'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const bulkProjectWork = await queryInterface.bulkInsert('projectWorks', [
      {
        creativeId: 3,
        attractionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        creativeId: 2,
        attractionId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        creativeId: 1,
        attractionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        creativeId: 1,
        attractionId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
