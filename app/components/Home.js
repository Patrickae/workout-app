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
		exerciseName: "Barbell Bent Over Row",
		URL: "http://www.exrx.net/WeightExercises/BackGeneral/BBBentOverRow.html",
		muscleGroup:"Back",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Bent_Over_Barbell_Row.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Seated Row",
		URL: "http://www.exrx.net/WeightExercises/BackGeneral/CBSeatedRow.html",
		muscleGroup:"Back",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Seated_Low_Cable_Row.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Dumbbell Bent Over Row",
		URL: "http://www.exrx.net/WeightExercises/BackGeneral/DBBentOverRow.html",
		muscleGroup:"Back",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/One_Arm_Dumbbell_Row.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "T-bar Row",
		URL: "http://www.exrx.net/WeightExercises/BackGeneral/LVTBarRow.html",
		muscleGroup:"Back",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Bent_Over_Two-Arm_Long_Bar_Row.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Assisted Pull-up",
		URL: "http://www.exrx.net/WeightExercises/LatissimusDorsi/AsPullupKneeling.html",
		muscleGroup:"Back",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Machine_Assisted_Pull-Ups_Pullups-1.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Pull-up",
		URL: "http://www.exrx.net/WeightExercises/LatissimusDorsi/BWPullup.html",
		muscleGroup:"Back",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Pullup.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Close Grip Pulldown",
		URL: "http://www.exrx.net/WeightExercises/LatissimusDorsi/CBCloseGripPulldown.html",
		muscleGroup:"Back",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/V-Bar_Triangle_Bar_Lat_Pull_Downs.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Close Grip Pulldown",
		URL: "http://www.exrx.net/WeightExercises/LatissimusDorsi/CBCloseGripPulldown.html",
		muscleGroup:"Back",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/V-Bar_Triangle_Bar_Lat_Pull_Downs.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Cable Pulldown",
		URL: "http://www.exrx.net/WeightExercises/LatissimusDorsi/CBFrontPulldown.html",
		muscleGroup:"Back",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Wide-Grip_Lat_Pulldown.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Barbell Shrug",
		URL: "http://www.exrx.net/WeightExercises/TrapeziusUpper/BBShrug.html",
		muscleGroup:"Back",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Barbell_Shrug.png",
		mechanics:"Isolated"
	},
	{
		exerciseName: "Cable Wide Grip Seated Row",
		URL: "http://www.exrx.net/WeightExercises/BackGeneral/CBWideGripSeatedRow.html",
		muscleGroup:"Back",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Seated_Machine_Back_Row.png",
		mechanics:"Compound"
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
