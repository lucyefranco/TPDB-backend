'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class themePark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.themePark.hasMany(models.attraction)
    }
  };
  themePark.init({
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    website: DataTypes.STRING,
    operatingCompany: DataTypes.STRING,
    openingDate: DataTypes.DATEONLY,
    status: DataTypes.BOOLEAN,
    about: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'themePark',
  });
  return themePark;
};