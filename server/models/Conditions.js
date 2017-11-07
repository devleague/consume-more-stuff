module.exports = function(sequelize, DataTypes){
  const Condition = sequelize.define('condition', {
    title: {
      type: DataTypes.STRING,
      allowNull:false
    }
  })

  Condition.associate = function(models){
    Condition.hasMany(models.item, {
      foreignKey: 'condition_id', as: 'condition'
    })
  }
  return Condition;
}