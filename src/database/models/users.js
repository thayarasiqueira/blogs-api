const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    displayName: DataTypes.STRING,
  });

  return User;
};

module.exports = User;