module.exports = function(sequelize, DataTypes){
  var Todo = sequelize.define("todo", {
      text: DataTypes.STRING,
      complete: DataTypes.BOOLEAN
  });
  return Todo;
};
