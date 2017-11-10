module.exports = function(sequelize, DataType) {
  const Item = sequelize.define('Item', {
    name : {
      type : DataType.STRING,
      allowNull : false
    },
    description : {
      type : DataType.STRING,
      allowNull : false
    },
    manufacturer : {
      type : DataType.STRING,
      allowNull : true
    },
    modelname : {
      type : DataType.STRING,
      allowNull : true
    },
    price : {
      type : DataType.REAL,
      allowNull : true
    },
  }, 
  {
    tableName : 'items'
  });

  Item.associate = function(models){
    Item.belongsTo(models.ItemStatus, {
      foreignKey : "is_sold",
      as : 'Status'
    });
    Item.belongsTo(models.User, {
      foreignKey : "user_id",
      as : 'User'
    });
    Item.belongsTo(models.Condition, {
      foreignKey : "condition_id",
      as : 'Condition'
    });
    Item.belongsTo(models.Category, {
      foreignKey : "category_id",
      as : 'Category'
    });
  };

  return Item;
};