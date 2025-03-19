'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Role,{targetKey:'code',foreignKey:'role',as:'role_code'});
      User.hasOne(models.Comment,{foreignKey:'author',as:'authorName'});
    }
  }
  User.init({
    username: DataTypes.STRING,
    phone: DataTypes.STRING,
    pass: DataTypes.STRING,
    avatar: DataTypes.STRING,
    role:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};