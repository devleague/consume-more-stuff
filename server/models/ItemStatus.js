module.exports = function(sequelize, DataTypes){
  const ItemStatus = sequelize.define('itemstatus', {
    title: DataTypes.STRING

  })

  ItemStatus.associate = function(models){
    ItemStatus.hasMany(models.item, {
      foreignKey: 'itemstatusId'
    })
  }
  return ItemStatus;
}