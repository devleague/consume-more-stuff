module.exports = function(sequelize, DataType){
  const ItemStatus = sequelize.define('ItemStatus', {
    sold: {type: DataType.STRING, allowNull: false}
  }, {
    tableName: 'status'
  });
  ItemStatus.associate = function(models){
    ItemStatus.hasOne(models.Item, {foreignKey:"is_sold", as: 'Status'});
    };

  return ItemStatus;
};