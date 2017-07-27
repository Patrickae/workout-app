import axios from "axios";

var helpers = {

//exercise helpers
	saveExercise: function(name, url, target, image) {
    var newExercise = { exerciseName: name, URL: url, targetArea: target, image: image };
    return axios.post("/api/exercises", newExercise)
      .then(function(response) {
        console.log("axios results", response.data._id);
        return response.data._id;
      });
  },

  getExercises: function(){
  	return axios.get("/api/exercises").then(function(response){
  		console.log("axios return data", response);
  		return response
  	});
  },

   deleteExercise: function(id){
  	return axios.delete("/api/exercises/"+id).then(function(response){
  		console.log("axios response", response);
  		return response
  	});
  }

};

export default helpers;