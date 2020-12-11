'use strict';
const {
  Model
} = require('sequelize');
const themepark = require('./themepark');
module.exports = (sequelize, DataTypes) => {
  class attraction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.attraction.belongsTo(models.themePark)
      models.attraction.belongsToMany(models.creative, {through: "projectwork"})
    }
  };
  attraction.init({
    themeParkID: DataTypes.INTEGER,
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    openingDate: DataTypes.DATEONLY,
    status: DataTypes.BOOLEAN,
    about: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'attraction',
  });
  return attraction;
};