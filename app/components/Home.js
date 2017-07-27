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
		exerciseName: "Assisted Triceps Dip",
		URL: "http://www.exrx.net/WeightExercises/Triceps/ASTriDip.html",
		muscleGroup:"Triceps",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Assisted_Tricep_Dips.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Close Grip Bench",
		URL: "http://www.exrx.net/WeightExercises/Triceps/BBCloseGripBenchPress.html",
		muscleGroup:"Triceps",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Close-Grip_Barbell_Bench_Press_M_WorkoutLabs.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Barbell Lying Triceps Extension",
		URL: "http://www.exrx.net/WeightExercises/Triceps/BBLyingTriExt.html",
		muscleGroup:"Triceps",
		image: "http://2.bp.blogspot.com/-137CgzTP9vc/VKzmyXqvTJI/AAAAAAAAArk/SgBN_icymMc/s1600/Barbell_Pullover.png",
		mechanics:"Isolated"
	},
	{
		exerciseName: "Skull Crusher",
		URL: "http://www.exrx.net/WeightExercises/Triceps/BBLyingTriExtSC.html",
		muscleGroup:"Triceps",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Flat_Bench_Barbell_Skull_Crushers.png",
		mechanics:"Isolated"
	},
	{
		exerciseName: "Cable Bent Over Triceps Extension",
		URL: "http://www.exrx.net/WeightExercises/Triceps/CBBentoverTriExt.html",
		muscleGroup:"Triceps",
		image: "https://s-media-cache-ak0.pinimg.com/736x/a5/e9/89/a5e989b0b75ae32ae49ed106b279c7b5--extension-google-overhead-press.jpg",
		mechanics:"Isolated"
	},
	{
		exerciseName: "Cable Pushdown",
		URL: "http://www.exrx.net/WeightExercises/Triceps/CBPushdown.html",
		muscleGroup:"Triceps",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Triceps_Pushdown.png",
		mechanics:"Isolated"
	},
	{
		exerciseName: "Dumbbell Kickback",
		URL: "http://www.exrx.net/WeightExercises/Triceps/DBKickback.html",
		muscleGroup:"Triceps",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Tricep_Dumbbell_Kickback.png",
		mechanics:"Isolated"
	},
	{
		exerciseName: "Bench Dip",
		URL: "http://www.exrx.net/WeightExercises/Triceps/BWBenchDip.html",
		muscleGroup:"Triceps",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Weighted_Bench_Dip1.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Triceps Dip",
		URL: "http://www.exrx.net/WeightExercises/Triceps/BWTriDip.html",
		muscleGroup:"Triceps",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Dips_M_WorkoutLabs.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Barbell Curl",
		URL: "http://www.exrx.net/WeightExercises/Biceps/BBCurl.html",
		muscleGroup:"Biceps",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Barbell_Curle.png",
		mechanics:"Isolated"
	},
	{
		exerciseName: "Cable Curl",
		URL: "http://www.exrx.net/WeightExercises/Biceps/CBCurl.html",
		muscleGroup:"Biceps",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Cable_Curl_M_WorkoutLabs.png",
		mechanics:"Isolated"
	},
	{
		exerciseName: "Dumbbell Curl",
		URL: "http://www.exrx.net/WeightExercises/Biceps/DBCurl.html",
		muscleGroup:"Biceps",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Standing_Dumbbell_Curl.png",
		mechanics:"Isolated"
	},
	{
		exerciseName: "Chin-up",
		URL: "http://www.exrx.net/WeightExercises/LatissimusDorsi/BWUnderhandChinup.html",
		muscleGroup:"Biceps",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Close_Grip_Pullup_Chinup_M_WorkoutLabs.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Preacher Curl",
		URL: "http://www.exrx.net/WeightExercises/Brachialis/BBPreacherCurl.html",
		muscleGroup:"Biceps",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Ez-bar_Precher_Curl.png",
		mechanics:"Isolated"
	},
	{
		exerciseName: "Concentration Curl",
		URL: "http://www.exrx.net/WeightExercises/Brachialis/DBConcentrationCurl.html",
		muscleGroup:"Biceps",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Concentration_Curls_F_WorkoutLabs.png",
		mechanics:"Isolated"
	},
	{
		exerciseName: "Concentration Curl",
		URL: "http://www.exrx.net/WeightExercises/Brachialis/DBConcentrationCurl.html",
		muscleGroup:"Biceps",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Concentration_Curls_F_WorkoutLabs.png",
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
