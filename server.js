// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");


// Require Schemas
var User = require("./model/user.js");
var Workout = require("./model/workout.js");
var Exercise = require("./model/exercise.js");

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

//-----------------------
//MongoDB config

mongoose.connect("mongodb://andyepatrick:aepster4@ds015403.mlab.com:15403/workout-app");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

//----------------------
//--------Routes for getting existing info----------------

//route to get all workouts
app.get("/api/workouts", function(req, res){
	//get all Workout Collection
	Workout.find({}).exec(function(err, doc){
		if(err){
			console.log(err)
		}
		else{
			res.send(doc);
		}
	});
});

//route to get all users
app.get("/api/users", function(req, res){
	//find all in the User collection
	User.find({}).exec(function(err, doc){
		if(err){
			console.log(err);
		}
		else{
			res.send(doc);
		}
	});
});

//get all exercises
app.get("/api/exercises", function(req, res){
	Exercise.find({}).exec(function(err, doc){
		if(err){
			console.log(err)
		}
		else{
			res.send(doc)
		}
	});
});



// app.get("/api/exercises/:id", function(req, res){
// 	Exercise.find({_id:req.params.id}).exec(function(err, doc){
// 		if(err){
// 			console.log(err)
// 		}
// 		else{
// 			res.send(doc)
// 		}
// 	});
// });






//---------------------------------------------------------------
//-----------Routes for adding info -----------------

//route to post a new workout
app.post("/api/workouts", function(req, res){
	//make a new instance of Workout with the req.body
	var newWorkout = new Workout(req.body);
	console.log(req.body);
	//save the new workout
	newWorkout.save(function(err, doc){
		if(err){
			console.log(err);
		}
		else{
			res.send(doc);
		}
	});
});

//add new user
app.post("/api/users", function(req, res){
	//make a new instance of User with the req.body
	var newUser = new User(req.body);
	console.log(req.body);
	//save the new User
	newUser.save(function(err, doc){
		if(err){
			console.log(err);
		}
		else{
			res.send(doc);
		}
	});
});

//add new exercise
app.post("/api/exercises", function(req, res){
	var newExercise = new Exercise(req.body);
	console.log(req.body);

	newExercise.save(function(err, doc){
		if(err){
			console.log(err)
		}
		else{
			res.send(doc);
		}
	});
});

//---------------------------------------------------------------
//---------------Routes for deleting ----------------------------

//delete workouts
app.delete("/api/workouts/:id", function(req,res){
	var id = req.params.id

	Workouts.find({_id: id}).remove().exec(function(err){
		if(err){
			console.log(err);
		}
		else{
			res.send("Deleted");
		}
	});
});

//delete users
app.delete("/api/users/:id", function(req,res){
	var id = req.params.id;

	User.find({_id:id}).remove().exec(function(err){
		if(err){
			console.log(err)
		}
		else{
			res.send("Deleted");
		}
	});
});

//delete exercises
app.delete("/api/exercises/:id", function(req, res){

	var id = req.params.id;

	Exercise.findByIdAndRemove(id, function(err, response){
		if(err){
			console.log("Collection couldnt be removed", err);
			return;
		}else{
			console.log("collection deleted")
		}
	});	
});

//---------------------------------------------------------------
//---------------Routes for Updating----------------------------

app.put("/api/workouts/:id", function(req, res){
	var id = req.params.id;
	Workout.findOne({_id: id}, function(err, foundObject){
		if(err){
			console.log(err);
			res.status(500).send();
		}
		else{
			if(!foundObject){
				res.status(404).send();
			}
			else{
				foundObject.workoutName = req.body.workoutName
			}
		}
	});
});


app.put("/api/workouts/:id", function(req, res){
	var id = req.params.id;
	Workout.findOne({_id: id}, function(err, foundObject){
		if(err){
			console.log(err);
			res.status(500).send();
		}
		else{
			if(!foundObject){
				res.status(404).send();
			}
			else{
				foundObject.workoutName = req.body.workoutName
			}
		}
	});
});



app.put("/api/users/:id", function(req, res){
	var id = req.params.id;
	User.findOne({_id: id}, function(err, foundObject){
		if(err){
			console.log(err);
			res.status(500).send();
		}
		else{
			if(!foundObject){
				res.status(404).send();
			}
			else{
				foundObject.name = req.body.name
			}
		}
	});
});

//---------------------------------------------------------------


// Any non API GET routes will be directed to our React App and handled by React Router
app.get("*", function(req, res) {
  res.sendFile(__dirname + "/view/public/index.html");
});



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
