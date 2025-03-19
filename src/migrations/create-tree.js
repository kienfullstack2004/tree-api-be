'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Trees', {
      id: {
        allowNull: false,
        //        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.STRING
      },
      nameTree: {
        type: Sequelize.STRING
      },
      desTree: {
        type: Sequelize.STRING
      },
      zalo: {
        type: Sequelize.STRING
      },
      imageTree: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        allowNull: false,
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Trees');
  }
};