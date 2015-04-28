/*jslint node: true */
"use strict";

module.exports = function(sequelize, DataTypes) {
  var ChaptersUsers = sequelize.define("ChaptersUsers", {
    startDate: {type: DataTypes.DATE, allowNull: true},
    finishDate: {type: DataTypes.DATE, allowNull: true},
    lastAccessDate: {type: DataTypes.DATE, allowNull: true},
    progress: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    status: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0}
  });

  return ChaptersUsers;
};
