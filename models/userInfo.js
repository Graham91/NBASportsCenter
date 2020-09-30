// Couldnt remember the columns we wanted, started with Name, email, and favorite team, easy to change.

module.exports = function (sequelize, DataTypes) {
  var UserInfo = sequelize.define("UserInfo", {
    UserID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    UserPassword: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    FavTeam: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gamestats: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    },
    FavPlayer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    SavedColorArray: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    FanWeight: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    FanHeight: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    FanPosition: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userImageURL: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return UserInfo;
};
