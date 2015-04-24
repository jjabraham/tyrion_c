/*jslint node: true */
"use strict";

module.exports = function(sequelize, DataTypes){
  var Chapter = sequelize.define('Chapter',{
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    published: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Chapter.belongsTo(models.Course);
      }
    }
  });
  return Chapter;
};
