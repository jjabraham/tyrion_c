/*jslint node: true */
"use strict";

module.exports = function(sequelize, DataTypes) {
  var Course = sequelize.define("Course", {
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    cpd: {type: DataTypes.FLOAT, allowNull: false, defaultValue: 0.00},
    published: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 1}
  }, {
    classMethods: {
      associate: function(models) {
        Course.hasMany(models.Chapter);
        Course.belongsToMany(models.User, {through: models.CoursesUsers});
      }
    }
  });

  return Course;
};
