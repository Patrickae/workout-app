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

