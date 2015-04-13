"use strict";

module.exports = function(sequelize, DataTypes) {
  var Course = sequelize.define("Course", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    cpd: DataTypes.INTEGER
  }/*, {
    classMethods: {
      associate: function(models) {
        Course.belongsTo(models.User);
      }
    }
  }*/);

  return Course;
};
