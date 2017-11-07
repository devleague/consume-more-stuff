module.exports = function(sequelize, DataType){
  const User = sequelize.define('User', {
    username:{type: DataType.STRING, allowNull: false, unique: true},
    password:{ type: DataType.STRING }
  }, {
    tableName: 'users'
  });
  User.associate = function(models){
    User.hasMany(models.Item, { foreignKey:"created_by", as: 'Items' });
    };

  return User;
};