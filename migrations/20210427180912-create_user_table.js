"use strict";

const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV1,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      team: {
        type:DataTypes.UUID,
        allowNull: true,
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: true,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
