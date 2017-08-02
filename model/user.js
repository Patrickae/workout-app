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

var User = module.exports = mongoose.model('User', UserSchema);

//create a new user and hash password
module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}

//get user by username
module.exports.getUserByUsername = function(username, callback){
	var query = {username: username};
	User.findOne(query, callback);
}

//get uset by ID
module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

//compare submitted password to real password
module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}
