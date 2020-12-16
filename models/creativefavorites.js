'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class creativeFavorites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.creativeFavorites.belongsTo(models.creative)
      models.creativeFavorites.belongsTo(models.user)
    }
  };
  creativeFavorites.init({
    creativeId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    creativeName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'creativeFavorites',
  });
  return creativeFavorites;
};