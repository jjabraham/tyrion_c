/*jslint node: true */
"use strict";
var bcrypt = require('bcrypt-nodejs');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate: {isEmail: true}
    },
    password: {type: DataTypes.STRING, allowNull: false},
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {isEmail: true}
    },
    active: {type: DataTypes.INTEGER, allowNull: false}
  }, {
    classMethods: {
      associate: function(models) {
        User.belongsToMany(models.Chapter, {through: models.ChaptersUsers});
        User.belongsToMany(models.Course, {through: models.CoursesUsers});
      },
      checkPassword2: function(user, password) {
        console.log('user.password', user.password);
        return bcrypt.compareSync(password, user.password);
      }
    },
    instanceMethods: {
      checkPassword: function(password) {
        //TODO: imlement proper logic here
        console.log('this.password', this.password);
        return bcrypt.compareSync(password, this.password);
      }
    },
    hooks: {
      beforeCreate: function(user) {
        user.password = bcrypt.hashSync(user.password);
      }
    }
  });
  return User;
};
