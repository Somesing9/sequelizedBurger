module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burgerName: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN,
    date: DataTypes.DATE
  });

  return Burger;
};