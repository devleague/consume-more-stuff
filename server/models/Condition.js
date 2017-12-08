module.exports = function(sequelize, DataType) {
  const Condition = sequelize.define('Condition', {
    condition : {
      type : DataType.STRING,
      allowNull : false
    }
  },
  {
    tableName : 'conditions'
  });

  Condition.associate = function(models) {
    Condition.hasMany(models.Item, {
      foreignKey : 'condition_id'
    });
  };

  return Condition;
};