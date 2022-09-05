const PostCategories = (sequelize, DataTypes) => {
  const PostCategories = sequelize.define("PostCategories", {
    postId: DataTypes.INTEGER,
  });

  return PostCategories;
};

module.exports = PostCategories;