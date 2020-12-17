'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class themeParkFavorites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.themeParkFavorites.belongsTo(models.themePark)
      models.themeParkFavorites.belongsTo(models.user)
    }
  };
  themeParkFavorites.init({
    themeParkId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    themeParkName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'themeParkFavorites',
  });
  return themeParkFavorites;
};