var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ExerciseSchema = new Schema({
  exerciseName:{
    type: String
  },
  URL:{
    type:String
  },
  muscleGroup:{
    type:String
  },
  image:{
    type:String
  },
  mechanics:{
    type:String
  }
});

var Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
