'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SearchQueries', {
      keyword: {
      type: Sequelize.STRING,
      allowNull: false,
      primayKey: true
    },
    screen_name: {
      type: Sequelize.STRING,
      allowNull: false,
      primayKey: true,
      onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'screen_name'
        }
    },
    exclude_keywords: {
      type: Sequelize.ARRAY(Sequelize.STRING)
    },
    exclude_links: {
      type: Sequelize.BOOLEAN
    },
    exclude_media: {
      type: Sequelize.BOOLEAN
    },
    exclude_retweets: {
      type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('SearchQueries');
  }
};