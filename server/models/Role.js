module.exports = function(sequelize, DataType) {
  const Role = sequelize.define('Role', {
    role : {
      type : DataType.STRING,
      allowNull : false
    }
  },
  {
    tableName : 'role'
  });

  Role.associate = function(models) {
    Role.hasMany(models.User, {
      foreignKey : 'role'
    });
  };

  return Role;
};