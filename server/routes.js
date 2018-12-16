var Twitter = require("twitter");
const fs  	= require('fs');

var Sequelize = require('sequelize');


const sequelize = new Sequelize('d4oug53rahvq9c', 'qxocxzztykdqfl', 'LpcbPBlRsU3VAUVBDQ2q4F5fAT', {
  host: 'ec2-54-83-25-217.compute-1.amazonaws.com',
  "dialect":"postgres",
        "ssl": true,
        "dialectOptions": {
            "ssl": true
        },

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }});


var UserModel = sequelize.import("./models/user.js");
console.log("ABS -- UserModel", UserModel);

module.exports = function(app) {

	app.get("/", function() { 

		res.render("../client/index.html");
	});

	app.get("/api/search_twitter", function(req, res) {
		// Keyword to search
		var search_keyword  =  req.query.search_keyword;
		var screen_name 	= req.query.screen_name;

		UserModel.find({where: {
						screen_name: screen_name
		}})
		.then((user) => {
			console.log("ABS -- user", user, " Access Token Secret", user.access_token_secret);
		// Twitter client
			var twitter_client = new Twitter({	
										  consumer_key: 	   "ACed8QSehc92avtRkx2rEs6P4",
										  consumer_secret: 	   "GFWrpOAn68W4wy303oCKbVmKWb5s6s20RF9gTbMmrHbLzXOc7G",
										  access_token_key:    user.access_token_key,
										  access_token_secret: user.access_token_secret
										});
		
			return search_twitter_promise(twitter_client, search_keyword);
		})
		.then(function(tweets) {
			res.send(tweets);
			return write_tweets_to_fs(tweets);
		})
		.then(function() {
			console.log("File is saved to FS");
		})
		.catch(function(err) {
			console.log("error:", err);
		})



		


	})
}

function search_twitter_promise(twitter_client, search_keyword) {

	return new Promise((resolve, reject) => {
		twitter_client.get('search/tweets', {q: search_keyword}, function(error, tweets, response) {
			if (error) {
				reject(error);
			}
			else {
				resolve(tweets);
			}
		});
	});
}

function write_tweets_to_fs(tweets){
	return new Promise((resolve, reject) => {
		fs.writeFile("./tweets.txt", JSON.stringify(tweets), function(err) {
			if (err) {
				reject(err);
			}
			else  {
				resolve();
			}
		});
	});
}
