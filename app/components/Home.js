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
		exerciseName: "Crunch",
		URL: "http://www.exrx.net/WeightExercises/RectusAbdominis/BWCrunch.html",
		muscleGroup:"Abs",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Sit_up_Crunch_F_WorkoutLabs.png",
		mechanics:"Isolated"
	},
	{
		exerciseName: "Jack-knife Sit-up",
		URL: "http://www.exrx.net/WeightExercises/RectusAbdominis/WtJackKnifeSitUp.html",
		muscleGroup:"Abs",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Jackknife_Sit-up_M_WorkoutLabs.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Jack-knife Sit-up",
		URL: "http://www.exrx.net/WeightExercises/RectusAbdominis/WtJackKnifeSitUp.html",
		muscleGroup:"Abs",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Jackknife_Sit-up_M_WorkoutLabs.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Hanginig leg hip raise",
		URL: "http://www.exrx.net/WeightExercises/RectusAbdominis/BWHangingLegHipRaise.html",
		muscleGroup:"Abs",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Hanging_Leg_Raise1.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Incline Sit-up",
		URL: "http://www.exrx.net/WeightExercises/RectusAbdominis/BWInclineSitUp.html",
		muscleGroup:"Abs",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Decline_Bench_Crunches_Sit-ups_Situps.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "V-up",
		URL: "http://www.exrx.net/WeightExercises/RectusAbdominis/WtVUp.html",
		muscleGroup:"Abs",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Jackknife_Sit-up_M_WorkoutLabs.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Cable Kneeling Crunch",
		URL: "http://www.exrx.net/WeightExercises/RectusAbdominis/CBKneelingCrunch.html",
		muscleGroup:"Abs",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Kneeling_Cable_Crunch_M_WorkoutLabs.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Side Bend",
		URL: "http://www.exrx.net/WeightExercises/Obliques/DB45SideBend.html",
		muscleGroup:"Abs",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Romain_Chair_Hyperextention_Bench_Side_Bends.png",
		mechanics:"Isolated"
	},
	{
		exerciseName: "Lying Twist",
		URL: "http://www.exrx.net/WeightExercises/Obliques/BWLyingTwist.html",
		muscleGroup:"Abs",
		image: "https://s-media-cache-ak0.pinimg.com/originals/35/a5/df/35a5dfbed232dd678940e6d4e5c5d08f.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Plank",
		URL: "http://www.exrx.net/WeightExercises/RectusAbdominis/BWFrontPlank.html",
		muscleGroup:"Abs",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Plank_M_WorkoutLabs.png",
		mechanics:"Isolated"
	},
	{
		exerciseName: "Side Plank",
		URL: "http://www.exrx.net/WeightExercises/Obliques/BWSidePlank.html",
		muscleGroup:"Abs",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Side_plank_M_WorkoutLabs.png",
		mechanics:"Isolated"
	},
	{
		exerciseName: "Barbell Deadlift",
		URL: "http://www.exrx.net/WeightExercises/ErectorSpinae/BBDeadlift.html",
		muscleGroup:"Back",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Barbell_Deadlift.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Straight Leg Barbell Deadlift",
		URL: "http://www.exrx.net/WeightExercises/ErectorSpinae/BBStraightLegDeadlift.html",
		muscleGroup:"Back",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Romanian_Deadlift1.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Back Extensions",
		URL: "http://www.exrx.net/WeightExercises/ErectorSpinae/BB45BackExtension.html",
		muscleGroup:"Back",
		image: "https://s-media-cache-ak0.pinimg.com/originals/f8/82/90/f882909dee0eda79ed5d1dc89eefd083.png",
		mechanics:"Isolated"
	},
	{
		exerciseName: "Dumbbell Straight Leg Deadlift",
		URL: "http://www.exrx.net/WeightExercises/ErectorSpinae/DBStraightLegDeadlift.html",
		muscleGroup:"Back",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Single_Straight_Leg_Dumbbell_Deadlift.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Superman",
		URL: "http://www.exrx.net/WeightExercises/ErectorSpinae/Superman.html",
		muscleGroup:"Back",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Superman.png",
		mechanics:"Isolated"
	},
	{
		exerciseName: "Bird Dog",
		URL: "http://www.exrx.net/WeightExercises/ErectorSpinae/BWBirdDog.html",
		muscleGroup:"Back",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Bird_Dogs_F_WorkoutLabs.png",
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
