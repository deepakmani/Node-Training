'use strict';
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('User', {
  	// 
    screen_name: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    profile_img_url: {
      type:      Sequelize.STRING,
      allowNull: false
    },
   access_token_key: {
      type:      Sequelize.STRING
    },
    access_token_secret: {
      type:      Sequelize.STRING
    },
    plan: {
      type:     Sequelize.STRING
    },
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};