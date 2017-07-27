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
		exerciseName: "Assisted Triceps Dip",
		URL: "http://www.exrx.net/WeightExercises/Triceps/ASTriDip.html",
		muscleGroup:"Triceps",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Assisted_Tricep_Dips.png",
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
