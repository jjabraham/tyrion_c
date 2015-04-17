"use strict";

module.exports = function(sequelize, DataTypes) {
  var Course = sequelize.define("Course", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    cpd: DataTypes.INTEGER,
    published: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Course.hasMany(models.Chapter);
      }
    }
  });

  return Course;
};
