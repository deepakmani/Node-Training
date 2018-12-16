'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      screen_name: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};