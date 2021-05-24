const sequelize = require('./index')
const { DataTypes } = require("sequelize");


const User = sequelize.define("Team", {
  id:{
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true
  },
  teamName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  teamLang: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    default: true,
  }
});

module.exports.User = User