var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var WorkoutSchema = new Schema({
  workoutName:{
    type: String
  },
  creator:{
    type: String
  },
  exercises:{
    type:Array
  },
  workoutType:{
    type:String
  }
});

var Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
