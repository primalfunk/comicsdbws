'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comic = sequelize.define('Comic', {
    title: DataTypes.STRING,
    issue: DataTypes.INTEGER,
    volume: DataTypes.INTEGER
  }, {});
  Comic.associate = function(models) {
    // associations can be defined here
  };
  return Comic;
};