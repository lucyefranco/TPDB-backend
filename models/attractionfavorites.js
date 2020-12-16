'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class attractionFavorites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.attractionFavorites.belongsTo(models.attractions)
      models.attractionFavorites.belongsTo(models.user)
    }
  };
  attractionFavorites.init({
    attractionId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    attractionName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'attractionFavorites',
  });
  return attractionFavorites;
};