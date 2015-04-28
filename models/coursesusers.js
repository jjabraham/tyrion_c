/*jslint node: true */
"use strict";

module.exports = function(sequelize, DataTypes) {
  var CoursesUsers = sequelize.define("CoursesUsers", {
    enrolDate: {type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW},
    startDate: {type: DataTypes.DATE, allowNull: true},
    finishDate: {type: DataTypes.DATE, allowNull: true},
    lastAccessDate: {type: DataTypes.DATE, allowNull: true},
    progress: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    status: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    lastChapter: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0}
  });

  return CoursesUsers;
};
