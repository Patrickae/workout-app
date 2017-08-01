var mongoose = require("mongoose");
var bcrypt = require("bcrypt");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  username:{
    type: String,
    required: [true, "can't be blank"],
    index: { unique: true }
  },
  password:{
    type:String,
    required: true
  },
  email:{
    type:String,
    lowercase: true,
    required: [true, "can't be blank"],
     index: { unique: true }
  },
  workouts:{
    type: Array
  }
});


var User = mongoose.model("User", UserSchema);

//hash password when creating a new user
module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}

//find users by username
module.exports.getUserByUsername = function(username, callback){
	var query = {username: username};
	User.findOne(query, callback);
}

//find users by Id
module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

//check if submitted password matches saved password
module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}

module.exports = User;
