import helpers from "./helpers";


var exercisesList = [
	{
		exerciseName: "",
		URL: "",
		targetArea:[],
		image: ""
	}
];



function seeder(){

	for (i=0; i<exercisesList.length; i++){

		helpers.saveExercise(exercisesList[i].exerciseName, exercisesList[i].URL, exercisesList[i].target, exercisesList[i].image);
	}

};






	var chestExercisesList = [
	{
		exerciseName: "Barbell Bench Press",
		URL: "http://www.exrx.net/WeightExercises/PectoralSternal/BBBenchPress.html",
		muscleGroup:"Chest",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Barbell_Bench_Press_M_WorkoutLabs.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Assisted Chest Dip",
		URL: "http://www.exrx.net/WeightExercises/PectoralSternal/AsChestDip.html",
		muscleGroup:"Chest",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Assisted_Tricep_Dips.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Barbell Decline Bench Press",
		URL: "http://www.exrx.net/WeightExercises/PectoralSternal/BBDeclineBenchPress.html",
		muscleGroup:"Chest",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Decline_Barbell_Bench_Press_M_WorkoutLabs.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Chest Dip",
		URL: "http://www.exrx.net/WeightExercises/PectoralSternal/BWChestDip.html",
		muscleGroup:"Chest",
		image: "https://s-media-cache-ak0.pinimg.com/originals/c2/9e/f3/c29ef30d315eacff652e2e3f065e9a33.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Cable Standing Fly",
		URL: "http://www.exrx.net/WeightExercises/PectoralSternal/CBStandingFly.html",
		muscleGroup:"Chest",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Standing_Cable_Fly.png",
		mechanics:"Isolated"
	},
	{
		exerciseName: "Cable Lying Fly",
		URL: "http://www.exrx.net/WeightExercises/PectoralSternal/CBLyingFly.html",
		muscleGroup:"Chest",
		image: "http://sharongayle.com/Blog/image.axd?picture=2012%2F12%2FChristmas+2012+Issue+-+GForceFit.jpg",
		mechanics:"Isolated"
	},
	{
		exerciseName: "Dumbbell Bench Press",
		URL: "http://www.exrx.net/WeightExercises/PectoralSternal/DBBenchPress.html",
		muscleGroup:"Chest",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Dumbbell_Bench_Press_M_WorkoutLabs.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Dumbbell Bench Press",
		URL: "http://www.exrx.net/WeightExercises/PectoralSternal/DBBenchPress.html",
		muscleGroup:"Chest",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Dumbbell_Bench_Press_M_WorkoutLabs.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Dumbbell Decline Bench Press",
		URL: "http://www.exrx.net/WeightExercises/PectoralSternal/DBDeclineBenchPress.html",
		muscleGroup:"Chest",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Decline_Dumbbell_Press_M_WorkoutLabs.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Dumbbell Pullover",
		URL: "http://www.exrx.net/WeightExercises/PectoralSternal/DBPullover.html",
		muscleGroup:"Chest",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Dumbbell_Pullover.png",
		mechanics:"Isolated"
	},
	{
		exerciseName: "Dumbbell Fly",
		URL: "http://www.exrx.net/WeightExercises/PectoralSternal/DBFly.html",
		muscleGroup:"Chest",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Flat_Bench_Dumbbell_Fly.png",
		mechanics:"Isolated"
	},
	{
		exerciseName: "Dumbbell Decline Fly",
		URL: "http://www.exrx.net/WeightExercises/PectoralSternal/DBDeclineFly.html",
		muscleGroup:"Chest",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Decline_Dumbbell_Fly.png",
		mechanics:"Isolated"
	},
	{
		exerciseName: "Machine Chest Press",
		URL: "http://www.exrx.net/WeightExercises/PectoralSternal/LVChestPressS.html",
		muscleGroup:"Chest",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Hammer_Strength_Machine_Chest_Press.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Smith Machine Chest Press",
		URL: "http://www.exrx.net/WeightExercises/PectoralSternal/SMBenchPress.html",
		muscleGroup:"Chest",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Smith_Machine_Chest_Press_M_WorkoutLabs.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Weighted Chest Dip",
		URL: "http://www.exrx.net/WeightExercises/PectoralSternal/WtChestDip.html",
		muscleGroup:"Chest",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Weighted_Tricep_Dips.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Barbell Incline Bench Press",
		URL: "http://www.exrx.net/WeightExercises/PectoralClavicular/BBInclineBenchPress.html",
		muscleGroup:"Chest",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Incline_Barbell_Bench_Press.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Dumbbell Incline Bench Press",
		URL: "http://www.exrx.net/WeightExercises/PectoralClavicular/DBInclineBenchPress.html",
		muscleGroup:"Chest",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Incline_Dumbbell_Press.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Dumbbell Incline Fly",
		URL: "http://www.exrx.net/WeightExercises/PectoralClavicular/DBInclineFly.html",
		muscleGroup:"Chest",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Incline_Dumbbell_Fly_F_WorkoutLabs.png",
		mechanics:"Isolated"
	},
	{
		exerciseName: "Push Up",
		URL: "http://www.exrx.net/WeightExercises/PectoralSternal/BWPushup.html",
		muscleGroup:"Chest",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Pushup1.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Decline Push Up",
		URL: "http://www.exrx.net/WeightExercises/PectoralClavicular/BWDeclinePushup.html",
		muscleGroup:"Chest",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Decline_Pushup1.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Suspended Chest Press",
		URL: "http://www.exrx.net/WeightExercises/PectoralSternal/STChestPress.html",
		muscleGroup:"Chest",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/TRX_Suspension_Straps_Chest_Press-1.png",
		mechanics:"Compound"
	}

];





var shoulderExercisesList = [
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
	{
		exerciseName: "Dumbbell Front Raise",
		URL: "http://www.exrx.net/WeightExercises/DeltoidAnterior/DBFrontRaise.html",
		muscleGroup:"Shoulders",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Forward_Dumbbell_Raise.png",
		mechanics:"Isolated"
	},
	{
		exerciseName: "Dumbbell Shoulder Press",
		URL: "http://www.exrx.net/WeightExercises/DeltoidAnterior/DBShoulderPress.html",
		muscleGroup:"Shoulders",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Dumbbell_Shoulder_Press_M_WorkoutLabs.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Machine Shoulder Press",
		URL: "http://www.exrx.net/WeightExercises/DeltoidAnterior/LVShoulderPress.html",
		muscleGroup:"Shoulders",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Machine_Seated_Shoulder_Press_M_WorkoutLabs.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Barbell Upright Row",
		URL: "http://www.exrx.net/WeightExercises/DeltoidLateral/BBUprightRow.html",
		muscleGroup:"Shoulders",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Barbell_Upright_Row.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Cable Lateral Raise",
		URL: "http://www.exrx.net/WeightExercises/DeltoidLateral/CBLateralRaise.html",
		muscleGroup:"Shoulders",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Single_Arm_Cable_Lateral_Side_Raise-1.png",
		mechanics:"Isolated"
	},
	{
		exerciseName: "Dumbbell Lateral Raise",
		URL: "http://www.exrx.net/WeightExercises/DeltoidLateral/DBLateralRaise.html",
		muscleGroup:"Shoulders",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Dumbbell_Lateral_Raise_Power-Partials.png",
		mechanics:"Isolated"
	},
	{
		exerciseName: "Machine Lateral Raise",
		URL: "http://www.exrx.net/WeightExercises/DeltoidLateral/LVLateralRaiseH.html",
		muscleGroup:"Shoulders",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Lateral_Raise_Machine_M_WorkoutLabs.png",
		mechanics:"Isolated"
	},
	{
		exerciseName: "Dumbbell Rear Delt Row",
		URL: "http://www.exrx.net/WeightExercises/DeltoidPosterior/DBRearDeltRow.html",
		muscleGroup:"Shoulders",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/One_Arm_Dumbbell_Row.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Dumbbell Lying Rear Delt Row",
		URL: "http://www.exrx.net/WeightExercises/DeltoidPosterior/DBLyingRearDeltRow.html",
		muscleGroup:"Shoulders",
		image: "http://workoutlabs.com/wp-content/uploads/watermarked/Dumbbell_Incline_Row_M_WorkoutLabs.png",
		mechanics:"Compound"
	},
	{
		exerciseName: "Seated Reverse Fly",
		URL: "http://www.exrx.net/WeightExercises/DeltoidPosterior/LVRearLateralRaise.html",
		muscleGroup:"Shoulders",
		image: "https://sportmenu.com/uploads/store/Texts/Text552/b73f5c.png",
		mechanics:"Isolated"
	}



];




