var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ExerciseSchema = new Schema({
  exerciseName:{
    type: String
  },
  URL:{
    type:String
  },
  targetArea:{
    type:String
  },
  image:{
    type:String
  }
});

var Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
