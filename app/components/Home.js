import React from "react";
import helpers from "../utils/helpers"

class Home extends React.Component{
	constructor(){
		super();
		this.state = {
			state: true
		}
	}





  render(){



// var exercisesList = [
// 	{
// 		exerciseName: "Barbell Flat Bench Press",
// 		URL: "http://www.exrx.net/WeightExercises/Quadriceps/BBSquat.html",
// 		targetArea:["Chest", "Triceps"],
// 		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Barbell_Bench_Press_M_WorkoutLabs.png"
// 	}
// ];



// function seeder(){

// 	for (var i=0; i<exercisesList.length; i++){

// 		helpers.saveExercise(exercisesList[i].exerciseName, exercisesList[i].URL, exercisesList[i].target, exercisesList[i].image);
// 	}

// };




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


	<button className="btn btn-warning">Seed Data</button>





	</div>
    );
  }

};

export default Home;
