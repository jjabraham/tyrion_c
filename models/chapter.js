/*jslint node: true */
"use strict";

module.exports = function(sequelize, DataTypes){
  var Chapter = sequelize.define('Chapter',{
    name:         {type: DataTypes.STRING, allowNull: false},
    description:  {type: DataTypes.STRING, allowNull: false},
    published:    {type: DataTypes.INTEGER, allowNull: false, defaultValue: 1}
  }, {
    classMethods: {
      associate: function(models) {
        Chapter.belongsTo(models.Course);
        Chapter.belongsToMany(models.User, {through: models.ChaptersUsers});
      }
    }
  });
  return Chapter;
};
