import mongoose from "mongoose";

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name:{
    type: String
  },
  username:{
    type: String
  },
  password:{
    type:String
  },
  email:{
    type:String
  },
  workouts:{
    type: Array
  }
});

var User = mongoose.model("User", UserSchema);

export default User;
