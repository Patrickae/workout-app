import { axios } from "axios";

var helpers = {

	saveExercise: function(name, url, target, image) {
    var newExercise = { exerciseName: name, URL: url, targetArea: target, image: image };
    return axios.post("/api/exercises", newExercises);
      .then(function(response) {
        console.log("axios results", response.data._id);
        return response.data._id;
      });
  }

};

export default helpers;