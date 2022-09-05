const BlogPosts = (sequelize, DataTypes) => {
  const User = sequelize.define("BlogPosts", {
    title: DataTypes.STRING,
  });

  return BlogPosts;
};

module.exports = BlogPosts;