'use strict';
module.exports = (sequelize, Sequelize) => {
  const SearchQuery = sequelize.define('SearchQuery', {
    keyword: {
    	type: Sequelize.STRING,
    	allowNull: false,
    	primayKey: true
    },
    // Foreign key
    screen_name: {
    	type: Sequelize.STRING,
    	allowNull: false,
    	primayKey: true,
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
    }

  }, {});
  SearchQuery.associate = function(db) {
    // associations can be defined here
    db["SearchQuery"].belongsTo(db["User"], {foreignKey: 'screen_name'}); // Adds fk_company to SearchQuery

  };
  return SearchQuery;
};