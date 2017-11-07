module.exports = function(sequelize, DataTypes){
  const Item = sequelize.define('item', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description:{
     type: DataTypes.STRING,
     allowNull: false
    },
    price:{
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    manufacturer:{
      type: DataTypes.STRING
    },
    model:{
      type: DataTypes.STRING
    },
    dimensions:{
      type: DataTypes.STRING
    },
    notes:{
      type: DataTypes.STRING
    },
    image:{
      type: DataTypes.STRING
    },
    deleted:{
      type: DataTypes.DATEONLY,
      defaultValue: null
    }
  })

  Item.associate = function(models){
  Item.belongsTo(models.user)
  Item.belongsTo(models.category)
  Item.belongsTo(models.condition)
  Item.belongsTo(models.itemstatus)
  }
  return Item;
}

