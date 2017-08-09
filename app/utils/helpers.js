import axios from "axios";

var helpers = {

//-----------exercise helpers-----------------------------
	saveExercise: function(name, url, target, image, mechanics) {
    var newExercise = { exerciseName: name, URL: url, muscleGroup: target, image: image, mechanics: mechanics };
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
  },


  exerciseSearchResults: function(muscleGroup, mechanism){
    // var conditions ={"muscleGroup":muscleGroup, "mechanism":mechanism};
    return axios.get("/api/exercises/"+muscleGroup+"/"+mechanism).then(function(response){
      console.log("axios return data", response);
      return response
    })
  },


//------------------------------------------------------------------
//---------------workout helpers-----------------------------------

	getWorkoutsByUser: function(id){
		return axios.get("/api/workouts/"+id).then(function(response){
      console.log("axios return data", response.data);
      return response
		});
	},

	getWorkoutsById: function(id){
		return axios.get("/api/workouts/id/"+id).then(function(response){
      console.log("axios return data", response.data);
      return response
		});
	},

	saveWorkout: function(workout){
		return axios.post("/api/workouts", workout)
      .then(function(response) {
        console.log("axios results", response.data._id);
        return response.data._id;
      });
	},

//------------------------------------------------------------------
//---------------user helpers-----------------------------------

	getUserByUsername: function(name){
		return axios.get("/api/users/"+name)
		.then(function(response){
			console.log("axios results", response);
			return response.data
		})
	},

	getUserById: function(id){
		return axios.get("/api/users/id/"+id)
		.then(function(response){
			console.log("axios results", response);
			return response.data
		})
	},

	addFriend: function(userId, friendId){
		return axios.put("/api/users/add",{currentUser: userId, requestedUser: friendId})
	},

	deleteFriend: function(userId, friendId){
		return axios.put("/api/users/delete",{currentUser: userId, requestedUser: friendId})
	},

	addWorkoutToUser: function(userId, workoutId){
		return axios.put("/api/userworkouts/add",{currentUser: userId, requestedId: workoutId})
	},
	deleteWorkoutFromUser: function(userId, workoutId){
		return axios.put("/api/userworkouts/delete",{currentUser: userId, requestedId: workoutId})
	},
	addFriendWorkoutToUser: function(userId, workoutId){
		return axios.put("/api/savedworkouts/add",{currentUser: userId, requestedId: workoutId})
	},
	deleteFriendWorkoutFromUser: function(userId, workoutId){
		return axios.put("/api/savedworkouts/delete",{currentUser: userId, requestedId: workoutId})
	}

//------------------------------------------------------------------



};

export default helpers;
