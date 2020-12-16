'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class creative extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.creative.belongsToMany(models.attraction, {through: "projectWork"})
    }
  };
  creative.init({
    name: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    about: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'creative',
  });
  return creative;
};