import helpers from './helpers'

var exercisesList = [
	{
		exerciseName: '',
		URL: '',
		targetArea: [],
		image: '',
	},
]

function seeder() {
	for (i = 0; i < exercisesList.length; i++) {
		helpers.saveExercise(
			exercisesList[i].exerciseName,
			exercisesList[i].URL,
			exercisesList[i].target,
			exercisesList[i].image
		)
	}
}

var chestExercisesList = [
	{
		exerciseName: 'Barbell Bench Press',
		URL: 'http://www.exrx.net/WeightExercises/PectoralSternal/BBBenchPress.html',
		muscleGroup: 'Chest',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Barbell_Bench_Press_M_WorkoutLabs.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Assisted Chest Dip',
		URL: 'http://www.exrx.net/WeightExercises/PectoralSternal/AsChestDip.html',
		muscleGroup: 'Chest',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Assisted_Tricep_Dips.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Barbell Decline Bench Press',
		URL: 'http://www.exrx.net/WeightExercises/PectoralSternal/BBDeclineBenchPress.html',
		muscleGroup: 'Chest',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Decline_Barbell_Bench_Press_M_WorkoutLabs.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Chest Dip',
		URL: 'http://www.exrx.net/WeightExercises/PectoralSternal/BWChestDip.html',
		muscleGroup: 'Chest',
		image: 'https://s-media-cache-ak0.pinimg.com/originals/c2/9e/f3/c29ef30d315eacff652e2e3f065e9a33.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Cable Standing Fly',
		URL: 'http://www.exrx.net/WeightExercises/PectoralSternal/CBStandingFly.html',
		muscleGroup: 'Chest',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Standing_Cable_Fly.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Cable Lying Fly',
		URL: 'http://www.exrx.net/WeightExercises/PectoralSternal/CBLyingFly.html',
		muscleGroup: 'Chest',
		image: 'http://sharongayle.com/Blog/image.axd?picture=2012%2F12%2FChristmas+2012+Issue+-+GForceFit.jpg',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Dumbbell Bench Press',
		URL: 'http://www.exrx.net/WeightExercises/PectoralSternal/DBBenchPress.html',
		muscleGroup: 'Chest',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Dumbbell_Bench_Press_M_WorkoutLabs.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Dumbbell Bench Press',
		URL: 'http://www.exrx.net/WeightExercises/PectoralSternal/DBBenchPress.html',
		muscleGroup: 'Chest',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Dumbbell_Bench_Press_M_WorkoutLabs.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Dumbbell Decline Bench Press',
		URL: 'http://www.exrx.net/WeightExercises/PectoralSternal/DBDeclineBenchPress.html',
		muscleGroup: 'Chest',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Decline_Dumbbell_Press_M_WorkoutLabs.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Dumbbell Pullover',
		URL: 'http://www.exrx.net/WeightExercises/PectoralSternal/DBPullover.html',
		muscleGroup: 'Chest',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Dumbbell_Pullover.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Dumbbell Fly',
		URL: 'http://www.exrx.net/WeightExercises/PectoralSternal/DBFly.html',
		muscleGroup: 'Chest',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Flat_Bench_Dumbbell_Fly.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Dumbbell Decline Fly',
		URL: 'http://www.exrx.net/WeightExercises/PectoralSternal/DBDeclineFly.html',
		muscleGroup: 'Chest',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Decline_Dumbbell_Fly.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Machine Chest Press',
		URL: 'http://www.exrx.net/WeightExercises/PectoralSternal/LVChestPressS.html',
		muscleGroup: 'Chest',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Hammer_Strength_Machine_Chest_Press.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Smith Machine Chest Press',
		URL: 'http://www.exrx.net/WeightExercises/PectoralSternal/SMBenchPress.html',
		muscleGroup: 'Chest',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Smith_Machine_Chest_Press_M_WorkoutLabs.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Weighted Chest Dip',
		URL: 'http://www.exrx.net/WeightExercises/PectoralSternal/WtChestDip.html',
		muscleGroup: 'Chest',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Weighted_Tricep_Dips.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Barbell Incline Bench Press',
		URL: 'http://www.exrx.net/WeightExercises/PectoralClavicular/BBInclineBenchPress.html',
		muscleGroup: 'Chest',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Incline_Barbell_Bench_Press.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Dumbbell Incline Bench Press',
		URL: 'http://www.exrx.net/WeightExercises/PectoralClavicular/DBInclineBenchPress.html',
		muscleGroup: 'Chest',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Incline_Dumbbell_Press.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Dumbbell Incline Fly',
		URL: 'http://www.exrx.net/WeightExercises/PectoralClavicular/DBInclineFly.html',
		muscleGroup: 'Chest',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Incline_Dumbbell_Fly_F_WorkoutLabs.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Push Up',
		URL: 'http://www.exrx.net/WeightExercises/PectoralSternal/BWPushup.html',
		muscleGroup: 'Chest',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Pushup1.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Decline Push Up',
		URL: 'http://www.exrx.net/WeightExercises/PectoralClavicular/BWDeclinePushup.html',
		muscleGroup: 'Chest',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Decline_Pushup1.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Suspended Chest Press',
		URL: 'http://www.exrx.net/WeightExercises/PectoralSternal/STChestPress.html',
		muscleGroup: 'Chest',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/TRX_Suspension_Straps_Chest_Press-1.png',
		mechanics: 'Compound',
	},
]

var shoulderExercisesList = [
	{
		exerciseName: 'Barbell Shoulder Press',
		URL: 'http://www.exrx.net/WeightExercises/DeltoidAnterior/BBShoulderPress.html',
		muscleGroup: 'Shoulders',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Seated_Barbell_Military_Press_M_WorkoutLabs.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Barbell Front Raise',
		URL: 'http://www.exrx.net/WeightExercises/DeltoidAnterior/BBFrontRaise.html',
		muscleGroup: 'Shoulders',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Barbell_Front_Raise.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Barbell Military Press',
		URL: 'http://www.exrx.net/WeightExercises/DeltoidAnterior/BBMilitaryPress.html',
		muscleGroup: 'Shoulders',
		image:
			'http://workoutlabs.com/wp-content/uploads/watermarked/Standing_Overhead_Barbell_Military_Shoulder_Press.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Arnold Press',
		URL: 'http://www.exrx.net/WeightExercises/DeltoidAnterior/DBArnoldPress.html',
		muscleGroup: 'Shoulders',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Seated_Arnold_Dumbbell_Press_M_WorkoutLabs.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Dumbbell Front Raise',
		URL: 'http://www.exrx.net/WeightExercises/DeltoidAnterior/DBFrontRaise.html',
		muscleGroup: 'Shoulders',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Forward_Dumbbell_Raise.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Dumbbell Shoulder Press',
		URL: 'http://www.exrx.net/WeightExercises/DeltoidAnterior/DBShoulderPress.html',
		muscleGroup: 'Shoulders',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Dumbbell_Shoulder_Press_M_WorkoutLabs.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Machine Shoulder Press',
		URL: 'http://www.exrx.net/WeightExercises/DeltoidAnterior/LVShoulderPress.html',
		muscleGroup: 'Shoulders',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Machine_Seated_Shoulder_Press_M_WorkoutLabs.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Barbell Upright Row',
		URL: 'http://www.exrx.net/WeightExercises/DeltoidLateral/BBUprightRow.html',
		muscleGroup: 'Shoulders',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Barbell_Upright_Row.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Cable Lateral Raise',
		URL: 'http://www.exrx.net/WeightExercises/DeltoidLateral/CBLateralRaise.html',
		muscleGroup: 'Shoulders',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Single_Arm_Cable_Lateral_Side_Raise-1.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Dumbbell Lateral Raise',
		URL: 'http://www.exrx.net/WeightExercises/DeltoidLateral/DBLateralRaise.html',
		muscleGroup: 'Shoulders',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Dumbbell_Lateral_Raise_Power-Partials.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Machine Lateral Raise',
		URL: 'http://www.exrx.net/WeightExercises/DeltoidLateral/LVLateralRaiseH.html',
		muscleGroup: 'Shoulders',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Lateral_Raise_Machine_M_WorkoutLabs.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Dumbbell Rear Delt Row',
		URL: 'http://www.exrx.net/WeightExercises/DeltoidPosterior/DBRearDeltRow.html',
		muscleGroup: 'Shoulders',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/One_Arm_Dumbbell_Row.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Dumbbell Lying Rear Delt Row',
		URL: 'http://www.exrx.net/WeightExercises/DeltoidPosterior/DBLyingRearDeltRow.html',
		muscleGroup: 'Shoulders',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Dumbbell_Incline_Row_M_WorkoutLabs.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Seated Reverse Fly',
		URL: 'http://www.exrx.net/WeightExercises/DeltoidPosterior/LVRearLateralRaise.html',
		muscleGroup: 'Shoulders',
		image: 'https://sportmenu.com/uploads/store/Texts/Text552/b73f5c.png',
		mechanics: 'Isolated',
	},
]

var armExercisesList = [
	{
		exerciseName: 'Assisted Triceps Dip',
		URL: 'http://www.exrx.net/WeightExercises/Triceps/ASTriDip.html',
		muscleGroup: 'Triceps',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Assisted_Tricep_Dips.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Close Grip Bench',
		URL: 'http://www.exrx.net/WeightExercises/Triceps/BBCloseGripBenchPress.html',
		muscleGroup: 'Triceps',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Close-Grip_Barbell_Bench_Press_M_WorkoutLabs.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Barbell Lying Triceps Extension',
		URL: 'http://www.exrx.net/WeightExercises/Triceps/BBLyingTriExt.html',
		muscleGroup: 'Triceps',
		image: 'http://2.bp.blogspot.com/-137CgzTP9vc/VKzmyXqvTJI/AAAAAAAAArk/SgBN_icymMc/s1600/Barbell_Pullover.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Skull Crusher',
		URL: 'http://www.exrx.net/WeightExercises/Triceps/BBLyingTriExtSC.html',
		muscleGroup: 'Triceps',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Flat_Bench_Barbell_Skull_Crushers.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Cable Bent Over Triceps Extension',
		URL: 'http://www.exrx.net/WeightExercises/Triceps/CBBentoverTriExt.html',
		muscleGroup: 'Triceps',
		image:
			'https://s-media-cache-ak0.pinimg.com/736x/a5/e9/89/a5e989b0b75ae32ae49ed106b279c7b5--extension-google-overhead-press.jpg',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Cable Pushdown',
		URL: 'http://www.exrx.net/WeightExercises/Triceps/CBPushdown.html',
		muscleGroup: 'Triceps',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Triceps_Pushdown.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Dumbbell Kickback',
		URL: 'http://www.exrx.net/WeightExercises/Triceps/DBKickback.html',
		muscleGroup: 'Triceps',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Tricep_Dumbbell_Kickback.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Bench Dip',
		URL: 'http://www.exrx.net/WeightExercises/Triceps/BWBenchDip.html',
		muscleGroup: 'Triceps',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Weighted_Bench_Dip1.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Triceps Dip',
		URL: 'http://www.exrx.net/WeightExercises/Triceps/BWTriDip.html',
		muscleGroup: 'Triceps',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Dips_M_WorkoutLabs.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Barbell Curl',
		URL: 'http://www.exrx.net/WeightExercises/Biceps/BBCurl.html',
		muscleGroup: 'Biceps',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Barbell_Curle.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Cable Curl',
		URL: 'http://www.exrx.net/WeightExercises/Biceps/CBCurl.html',
		muscleGroup: 'Biceps',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Cable_Curl_M_WorkoutLabs.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Dumbbell Curl',
		URL: 'http://www.exrx.net/WeightExercises/Biceps/DBCurl.html',
		muscleGroup: 'Biceps',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Standing_Dumbbell_Curl.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Chin-up',
		URL: 'http://www.exrx.net/WeightExercises/LatissimusDorsi/BWUnderhandChinup.html',
		muscleGroup: 'Biceps',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Close_Grip_Pullup_Chinup_M_WorkoutLabs.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Preacher Curl',
		URL: 'http://www.exrx.net/WeightExercises/Brachialis/BBPreacherCurl.html',
		muscleGroup: 'Biceps',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Ez-bar_Precher_Curl.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Concentration Curl',
		URL: 'http://www.exrx.net/WeightExercises/Brachialis/DBConcentrationCurl.html',
		muscleGroup: 'Biceps',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Concentration_Curls_F_WorkoutLabs.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Concentration Curl',
		URL: 'http://www.exrx.net/WeightExercises/Brachialis/DBConcentrationCurl.html',
		muscleGroup: 'Biceps',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Concentration_Curls_F_WorkoutLabs.png',
		mechanics: 'Isolated',
	},
]

var forearmExercisesList = [
	{
		exerciseName: 'Reverse Curl',
		URL: 'http://www.exrx.net/WeightExercises/Brachioradialis/BBReverseCurl.html',
		muscleGroup: 'Forearms',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Standing_Reverse_Barbell_Curls-1.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Hammer Curl',
		URL: 'http://www.exrx.net/WeightExercises/Brachioradialis/DBHammerCurl.html',
		muscleGroup: 'Forearms',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Hammer_Curls.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Wrist Curl',
		URL: 'http://www.exrx.net/WeightExercises/WristFlexors/BBWristCurl.html',
		muscleGroup: 'Forearms',
		image:
			'http://workoutlabs.com/wp-content/uploads/watermarked/Seated_Palm-Up_Barbell_Wrist_Curl_F_WorkoutLabs.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Wrist Curl',
		URL: 'http://www.exrx.net/WeightExercises/WristFlexors/BBWristCurl.html',
		muscleGroup: 'Forearms',
		image:
			'http://workoutlabs.com/wp-content/uploads/watermarked/Seated_Palm-Up_Barbell_Wrist_Curl_F_WorkoutLabs.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Reverse Wrist Curl',
		URL: 'http://www.exrx.net/WeightExercises/WristExtensors/BBReverseWristCurl.html',
		muscleGroup: 'Forearms',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Seated_Palm-Down_Barbell_Wrist_Curl.png',
		mechanics: 'Isolated',
	},
]

var backExercisesList = [
	{
		exerciseName: 'Barbell Bent Over Row',
		URL: 'http://www.exrx.net/WeightExercises/BackGeneral/BBBentOverRow.html',
		muscleGroup: 'Back',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Bent_Over_Barbell_Row.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Seated Row',
		URL: 'http://www.exrx.net/WeightExercises/BackGeneral/CBSeatedRow.html',
		muscleGroup: 'Back',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Seated_Low_Cable_Row.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Dumbbell Bent Over Row',
		URL: 'http://www.exrx.net/WeightExercises/BackGeneral/DBBentOverRow.html',
		muscleGroup: 'Back',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/One_Arm_Dumbbell_Row.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'T-bar Row',
		URL: 'http://www.exrx.net/WeightExercises/BackGeneral/LVTBarRow.html',
		muscleGroup: 'Back',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Bent_Over_Two-Arm_Long_Bar_Row.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Assisted Pull-up',
		URL: 'http://www.exrx.net/WeightExercises/LatissimusDorsi/AsPullupKneeling.html',
		muscleGroup: 'Back',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Machine_Assisted_Pull-Ups_Pullups-1.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Pull-up',
		URL: 'http://www.exrx.net/WeightExercises/LatissimusDorsi/BWPullup.html',
		muscleGroup: 'Back',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Pullup.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Close Grip Pulldown',
		URL: 'http://www.exrx.net/WeightExercises/LatissimusDorsi/CBCloseGripPulldown.html',
		muscleGroup: 'Back',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/V-Bar_Triangle_Bar_Lat_Pull_Downs.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Close Grip Pulldown',
		URL: 'http://www.exrx.net/WeightExercises/LatissimusDorsi/CBCloseGripPulldown.html',
		muscleGroup: 'Back',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/V-Bar_Triangle_Bar_Lat_Pull_Downs.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Cable Pulldown',
		URL: 'http://www.exrx.net/WeightExercises/LatissimusDorsi/CBFrontPulldown.html',
		muscleGroup: 'Back',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Wide-Grip_Lat_Pulldown.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Barbell Shrug',
		URL: 'http://www.exrx.net/WeightExercises/TrapeziusUpper/BBShrug.html',
		muscleGroup: 'Back',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Barbell_Shrug.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Cable Wide Grip Seated Row',
		URL: 'http://www.exrx.net/WeightExercises/BackGeneral/CBWideGripSeatedRow.html',
		muscleGroup: 'Back',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Seated_Machine_Back_Row.png',
		mechanics: 'Compound',
	},
]

var backAndAbExercisesList = [
	{
		exerciseName: 'Crunch',
		URL: 'http://www.exrx.net/WeightExercises/RectusAbdominis/BWCrunch.html',
		muscleGroup: 'Abs',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Sit_up_Crunch_F_WorkoutLabs.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Jack-knife Sit-up',
		URL: 'http://www.exrx.net/WeightExercises/RectusAbdominis/WtJackKnifeSitUp.html',
		muscleGroup: 'Abs',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Jackknife_Sit-up_M_WorkoutLabs.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Jack-knife Sit-up',
		URL: 'http://www.exrx.net/WeightExercises/RectusAbdominis/WtJackKnifeSitUp.html',
		muscleGroup: 'Abs',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Jackknife_Sit-up_M_WorkoutLabs.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Hanginig leg hip raise',
		URL: 'http://www.exrx.net/WeightExercises/RectusAbdominis/BWHangingLegHipRaise.html',
		muscleGroup: 'Abs',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Hanging_Leg_Raise1.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Incline Sit-up',
		URL: 'http://www.exrx.net/WeightExercises/RectusAbdominis/BWInclineSitUp.html',
		muscleGroup: 'Abs',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Decline_Bench_Crunches_Sit-ups_Situps.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'V-up',
		URL: 'http://www.exrx.net/WeightExercises/RectusAbdominis/WtVUp.html',
		muscleGroup: 'Abs',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Jackknife_Sit-up_M_WorkoutLabs.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Cable Kneeling Crunch',
		URL: 'http://www.exrx.net/WeightExercises/RectusAbdominis/CBKneelingCrunch.html',
		muscleGroup: 'Abs',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Kneeling_Cable_Crunch_M_WorkoutLabs.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Side Bend',
		URL: 'http://www.exrx.net/WeightExercises/Obliques/DB45SideBend.html',
		muscleGroup: 'Abs',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Romain_Chair_Hyperextention_Bench_Side_Bends.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Lying Twist',
		URL: 'http://www.exrx.net/WeightExercises/Obliques/BWLyingTwist.html',
		muscleGroup: 'Abs',
		image: 'https://s-media-cache-ak0.pinimg.com/originals/35/a5/df/35a5dfbed232dd678940e6d4e5c5d08f.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Plank',
		URL: 'http://www.exrx.net/WeightExercises/RectusAbdominis/BWFrontPlank.html',
		muscleGroup: 'Abs',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Plank_M_WorkoutLabs.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Side Plank',
		URL: 'http://www.exrx.net/WeightExercises/Obliques/BWSidePlank.html',
		muscleGroup: 'Abs',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Side_plank_M_WorkoutLabs.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Barbell Deadlift',
		URL: 'http://www.exrx.net/WeightExercises/ErectorSpinae/BBDeadlift.html',
		muscleGroup: 'Back',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Barbell_Deadlift.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Straight Leg Barbell Deadlift',
		URL: 'http://www.exrx.net/WeightExercises/ErectorSpinae/BBStraightLegDeadlift.html',
		muscleGroup: 'Back',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Romanian_Deadlift1.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Back Extensions',
		URL: 'http://www.exrx.net/WeightExercises/ErectorSpinae/BB45BackExtension.html',
		muscleGroup: 'Back',
		image: 'https://s-media-cache-ak0.pinimg.com/originals/f8/82/90/f882909dee0eda79ed5d1dc89eefd083.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Dumbbell Straight Leg Deadlift',
		URL: 'http://www.exrx.net/WeightExercises/ErectorSpinae/DBStraightLegDeadlift.html',
		muscleGroup: 'Back',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Single_Straight_Leg_Dumbbell_Deadlift.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Superman',
		URL: 'http://www.exrx.net/WeightExercises/ErectorSpinae/Superman.html',
		muscleGroup: 'Back',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Superman.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Bird Dog',
		URL: 'http://www.exrx.net/WeightExercises/ErectorSpinae/BWBirdDog.html',
		muscleGroup: 'Back',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Bird_Dogs_F_WorkoutLabs.png',
		mechanics: 'Isolated',
	},
]

var legExercisesList = [
	{
		exerciseName: 'Deadlift',
		URL: 'http://www.exrx.net/WeightExercises/GluteusMaximus/BBDeadlift.html',
		muscleGroup: 'Legs',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Barbell_Deadlift.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Squat',
		URL: 'http://www.exrx.net/WeightExercises/GluteusMaximus/BBSquat.html',
		muscleGroup: 'Legs',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Barbell_Squat.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Barbell Lunge',
		URL: 'http://www.exrx.net/WeightExercises/GluteusMaximus/BBLunge.html',
		muscleGroup: 'Legs',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Barbell_Lunge1.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Hip Thrust',
		URL: 'http://www.exrx.net/WeightExercises/GluteusMaximus/BBHipThrust.html',
		muscleGroup: 'Legs',
		image: 'https://s-media-cache-ak0.pinimg.com/736x/2e/42/7e/2e427ef878cd2704c088f152ae7d7c2e--super-glutes.jpg',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Front Squat',
		URL: 'http://www.exrx.net/WeightExercises/GluteusMaximus/BBFrontSquat.html',
		muscleGroup: 'Legs',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Front_Squat1.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Barbell Step-up',
		URL: 'http://www.exrx.net/WeightExercises/GluteusMaximus/BBStepUp.html',
		muscleGroup: 'Legs',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Barbell-Step-up.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Single Leg Deadlift',
		URL: 'http://www.exrx.net/WeightExercises/GluteusMaximus/DBSingleLegStiffLegDeadlift.html',
		muscleGroup: 'Legs',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Single_Straight_Leg_Dumbbell_Deadlift.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Dumbbell Lunge',
		URL: 'http://www.exrx.net/WeightExercises/GluteusMaximus/DBLunge.html',
		muscleGroup: 'Legs',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Dumbbell_Lunges_M_WorkoutLabs.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Dumbbell Side Lunge',
		URL: 'http://www.exrx.net/WeightExercises/GluteusMaximus/DBSideLunge.html',
		muscleGroup: 'Legs',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Side_Lunge_M_WorkoutLabs.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: '45 Degree Leg Press',
		URL: 'http://www.exrx.net/WeightExercises/GluteusMaximus/LV45LegPress.html',
		muscleGroup: 'Legs',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Leg_press_F_WorkoutLabs.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Hack Press',
		URL: 'http://www.exrx.net/WeightExercises/GluteusMaximus/LVHackPress.html',
		muscleGroup: 'Legs',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Machine_Hack_Squat1.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Seated Leg Press',
		URL: 'http://www.exrx.net/WeightExercises/GluteusMaximus/LVSeatedLegPress.html',
		muscleGroup: 'Legs',
		image:
			'http://images.seek4fitness.net/Exercise/03692332-c97a-102c-b939-001f29cc93fa/Original/Inclined-seated-leg-press.Leg-press.jpg',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Smith Squat',
		URL: 'http://www.exrx.net/WeightExercises/GluteusMaximus/SMSquat.html',
		muscleGroup: 'Legs',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Smith_Machine_Squats.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Body Weight Squat',
		URL: 'http://www.exrx.net/WeightExercises/GluteusMaximus/BWSquat.html',
		muscleGroup: 'Legs',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Bodyweight_Squat.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Body Weight Lunge',
		URL: 'http://www.exrx.net/WeightExercises/GluteusMaximus/BWLunge.html',
		muscleGroup: 'Legs',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Bodyweight_Walking_Lunge1.png',
		mechanics: 'Compound',
	},
	{
		exerciseName: 'Rollout',
		URL: 'http://www.exrx.net/WeightExercises/HipFlexors/BWKneelingWheelRollout.html',
		muscleGroup: 'Abs',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Ab_Roller_Wheel_Rollout_M_WorkoutLabs.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Lying Straight Leg Raise',
		URL: 'http://www.exrx.net/WeightExercises/HipFlexors/BWStraightLegRaise.html',
		muscleGroup: 'Abs',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Lying_Leg_Raise1.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Leg Extensions',
		URL: 'http://www.exrx.net/WeightExercises/Quadriceps/LVLegExtension.html',
		muscleGroup: 'Legs',
		image: 'https://s-media-cache-ak0.pinimg.com/originals/4d/48/87/4d488729c282bfe28539efaf75fc581f.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Lying Leg Curl',
		URL: 'http://www.exrx.net/WeightExercises/Hamstrings/LVLyingLegCurl.html',
		muscleGroup: 'Legs',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Lying_Leg_Curls_M_WorkoutLabs.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Seated Leg Curl',
		URL: 'http://www.exrx.net/WeightExercises/Hamstrings/LVSeatedLegCurl.html',
		muscleGroup: 'Legs',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Lying_Leg_Curls_M_WorkoutLabs.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Seated Hip Adduction',
		URL: 'http://www.exrx.net/WeightExercises/HipAdductors/LVSeatedHipAdduction.html',
		muscleGroup: 'Legs',
		image:
			'http://workoutlabs.com/wp-content/uploads/watermarked/Thigh_Adductor_Inner_Thigh_Machine_F_WorkoutLabs.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Seated Hip Abduction',
		URL: 'http://www.exrx.net/WeightExercises/HipAbductor/LVSeatedHipAbduction.html',
		muscleGroup: 'Legs',
		image:
			'http://workoutlabs.com/wp-content/uploads/watermarked/Thigh_Adductor_Inner_Thigh_Machine_M_WorkoutLabs.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Barbell Calf Raise',
		URL: 'http://www.exrx.net/WeightExercises/Gastrocnemius/SBStandingCalfRaise.html',
		muscleGroup: 'Calves',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/standing_barbell_calf_raise-1.png',
		mechanics: 'Isolated',
	},
	{
		exerciseName: '45 Degree Calf Press',
		URL: 'http://www.exrx.net/WeightExercises/Gastrocnemius/LV45CalfPress.html',
		muscleGroup: 'Calves',
		image:
			'https://s-media-cache-ak0.pinimg.com/736x/50/a7/e2/50a7e2b8e81b7fc3bbd90ddd7b6bc6cb--squat-press-monday-workout.jpg',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Lever Standing Calf Raise',
		URL: 'http://www.exrx.net/WeightExercises/Gastrocnemius/LVStandingCalfRaise.html',
		muscleGroup: 'Calves',
		image: 'http://web5.lib.pacificu.edu/boxerbootcamp/wp-content/uploads/sites/36/2016/01/Standing-Calf-Raise.gif',
		mechanics: 'Isolated',
	},
	{
		exerciseName: 'Seated Calf Raise',
		URL: 'http://www.exrx.net/WeightExercises/Soleus/LVSeatedCalfRaise.html',
		muscleGroup: 'Calves',
		image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Seated_Calf_Raise.png',
		mechanics: 'Isolated',
	},
]
