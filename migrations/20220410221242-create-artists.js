'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('artists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stagename: {
        type: Sequelize.STRING
      },
      singles: {
        type: Sequelize.INTEGER
      },
      industryyears: {
        type: Sequelize.STRING
      },
      followings: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('artists');
  }
};