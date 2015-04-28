/*jslint node: true */
"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING, allowNull: false},
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {isEmail: true}
    },
    active: {type: DataTypes.INTEGER, allowNull: false}
  }, {
    classMethods: {
      associate: function(models) {
        User.belongsToMany(models.Chapter, {through: models.ChaptersUsers});
        User.belongsToMany(models.Course, {through: models.CoursesUsers});
      }
    }
  });

  return User;
};
