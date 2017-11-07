module.exports = function(sequelize, DataType){
  const Category = sequelize.define('Category', {
    category: { type: DataType.STRING, allowNull: false }
  }, {
    tableName: 'categories'
  });
  Category.associate = function(models){
    Category.hasMany(models.Item, { foreignKey:"category_id", as: 'Categories' });
    };

  return Category;
};