'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
Role.hasOne(models.User, { foreignKey: 'role', as: 'role_code' })
    }
  }
  Role.init({
    code: DataTypes.STRING,
    value: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};