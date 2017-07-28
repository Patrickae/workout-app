var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var WorkoutSchema = new Schema({
  workoutName:{
    type: String
  },
  creatorId:{
    type: String
  },
  exercises:{
    type:Array
  },
  description:{
    type:String
  },
   type:{
    type:String
  }
});

var Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
