"use strict";

const { DataTypes } = require("sequelize/types");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Languages", {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV1,
      },
      languageCode: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      languageName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Languages");
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
