const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define("PostCategory", {
    postId: { type: DataTypes.INTEGER, foreignKey: true, primaryKey: true },
    categoryId: { type: DataTypes.INTEGER, foreignKey: true, primaryKey: true }
  },
  {
    timestamps: false,
    tableName: 'PostCategories'
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost,
      {
        as: 'blogposts',
        through: PostCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId'
      });
    models.BlogPost.belongsToMany(models.Category,
      {
        as: 'categories',
        through: PostCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId'
      });
  }

  return PostCategory;
};

module.exports = PostCategory;