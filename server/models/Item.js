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
    imageUrl : {
      type : DataType.STRING,
      allowNull : true
    },
    manufacturer : {
      type : DataType.STRING,
      allowNull : true
    },
    model : {
      type : DataType.STRING,
      allowNull : true
    },
    price : {
      type : DataType.STRING,
      allowNull : true
    },
    dimensions : {
      type : DataType.STRING,
      allowNull : true
    },
    notes : {
      type : DataType.TEXT,
      allowNull : true
    },
    deletedAt : {
      type : DataType.DATE,
      allowNull : true
    }
  }, // add columns for dimension
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