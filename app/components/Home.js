import React from "react";
import helpers from "../utils/helpers"

class Home extends React.Component{
	constructor(){
		super();
		this.state = {
			state: true
		}
	}

seeder(){

	var exercisesList = [
	{
		exerciseName: "Reverse Curl",
		URL: "http://www.exrx.net/WeightExercises/Brachioradialis/BBReverseCurl.html",
		muscleGroup:"Forearms",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Standing_Reverse_Barbell_Curls-1.png",
		mechanics:"Isolated"
	},
	{
		exerciseName: "Hammer Curl",
		URL: "http://www.exrx.net/WeightExercises/Brachioradialis/DBHammerCurl.html",
		muscleGroup:"Forearms",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Hammer_Curls.png",
		mechanics:"Isolated"
	},
	{
		exerciseName: "Wrist Curl",
		URL: "http://www.exrx.net/WeightExercises/WristFlexors/BBWristCurl.html",
		muscleGroup:"Forearms",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Seated_Palm-Up_Barbell_Wrist_Curl_F_WorkoutLabs.png",
		mechanics:"Isolated"
	},
	{
		exerciseName: "Wrist Curl",
		URL: "http://www.exrx.net/WeightExercises/WristFlexors/BBWristCurl.html",
		muscleGroup:"Forearms",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Seated_Palm-Up_Barbell_Wrist_Curl_F_WorkoutLabs.png",
		mechanics:"Isolated"
	},
	{
		exerciseName: "Reverse Wrist Curl",
		URL: "http://www.exrx.net/WeightExercises/WristExtensors/BBReverseWristCurl.html",
		muscleGroup:"Forearms",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Seated_Palm-Down_Barbell_Wrist_Curl.png",
		mechanics:"Isolated"
	}
	

];

	for (var i=0; i<exercisesList.length; i++){

		helpers.saveExercise(exercisesList[i].exerciseName, exercisesList[i].URL, exercisesList[i].muscleGroup, exercisesList[i].image, exercisesList[i].mechanics);
	}

	// helpers.deleteExercise("59796b3b1dc8eae5c9476d10");


};







  render(){




    return(
    	<div>
    	  <div className="row">
          	<div className="jumbotron text-center" id="jumbo">
            <h1>Workout helper</h1>
          	</div>
        </div>
    	<h3> Recommended for you </h3>
      <ul className="list-group">
		  <li className="list-group-item">Weight Training</li>
		  <li className="list-group-item">HIIT Training</li>
		  <li className="list-group-item">Running intervals</li>
		  <li className="list-group-item">Leg Day</li>
		  <li className="list-group-item">Full Body Strength</li>
	</ul>


	<button className="btn btn-warning" onClick={this.seeder}>Seed Data</button>

	





	</div>
    );
  }

};

export default Home;
