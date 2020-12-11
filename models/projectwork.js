'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class projectWork extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  projectWork.init({
    creativeID: DataTypes.INTEGER,
    attractionID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'projectWork',
  });
  return projectWork;
};