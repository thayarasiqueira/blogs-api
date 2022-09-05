'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'Users',
      'createdAt',
    )
    await queryInterface.removeColumn(
      'Users',
      'updatedAt',
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Users',
      'createdAt',
      Sequelize.DATE
    )
    await queryInterface.addColumn(
      'Users',
      'updatedAt',
      Sequelize.DATE
    )
  }
};
