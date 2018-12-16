
// DB Model
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

var user = {   name: 				"Douglas",
			   screen_name:			"dougk",
			   profile_img_url: 	"img",
			   access_token_key: 	"1724608555-2AfqipBQ2ziRnex51pJeLEncBlsehxn9OcqTwDS",
			   access_token_secret: "IvbzE2Ngob3AQeuTBJ5J3Uv8m3sbJHb0fzXsi3hKxCjzN",
			  };
		
console.log(" ABS -- UserModel", UserModel);		
UserModel.create(user)
.then((user) => {
	
	console.log("user stored", user);
});	
	

			  

