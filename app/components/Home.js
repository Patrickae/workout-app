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
		exerciseName: "Barbell Shoulder Press",
		URL: "http://www.exrx.net/WeightExercises/DeltoidAnterior/BBShoulderPress.html",
		muscleGroup:"Shoulders",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Seated_Barbell_Military_Press_M_WorkoutLabs.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Barbell Front Raise",
		URL: "http://www.exrx.net/WeightExercises/DeltoidAnterior/BBFrontRaise.html",
		muscleGroup:"Shoulders",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Barbell_Front_Raise.png",
		mechanics:"Isolated"
	},
	{
		exerciseName: "Barbell Military Press",
		URL: "http://www.exrx.net/WeightExercises/DeltoidAnterior/BBMilitaryPress.html",
		muscleGroup:"Shoulders",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Standing_Overhead_Barbell_Military_Shoulder_Press.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Arnold Press",
		URL: "http://www.exrx.net/WeightExercises/DeltoidAnterior/DBArnoldPress.html",
		muscleGroup:"Shoulders",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Seated_Arnold_Dumbbell_Press_M_WorkoutLabs.png",
		mechanics:"Compound"
	},
	
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
