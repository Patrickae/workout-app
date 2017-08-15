// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');
<<<<<<< HEAD
var session = require('express-session');
=======
var expressSession = require('express-session');
>>>>>>> d890bd5011f70d133377ce74426081f6df1f4ab9
var logger = require("morgan");
var mongoose = require("mongoose");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var users = require('./login-routes/users');
var User = require("./model/user.js");

// Require Schemas
var Workout = require("./model/workout.js");
var Exercise = require("./model/exercise.js");

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger("dev"));

//body and cookie parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));
app.use(cookieParser());


//set static folder
app.use(express.static("./public"));
// Express Session
app.use(expressSession({
    secret: 'secret',
    saveUninitialized: false,
    resave: false
}));
// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
    var namespace = param.split('.'),
      root = namespace.shift(),
      formParam = root;

    while (namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {param: formParam, msg: msg, value: value};
  }
}));

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

//------------------------------------------------

//--------Routes for getting existing info----------------

//route to get all workouts
app.get("/api/workouts", function(req, res) {
  //get all Workout Collection
  Workout.find({}).exec(function(err, doc) {
    if (err) {
      console.log(err)
    } else {
      res.send(doc);
    }
  });
});

//route to get all workouts by creatorId
app.get("/api/workouts/:creatorId", function(req, res) {
  //get all Workout Collection
  Workout.find({creatorId: req.params.creatorId}).exec(function(err, doc) {
    if (err) {
      console.log(err)
    } else {
      res.send(doc);
    }
  });
});

app.get("/api/workouts/id/:id", function(req,res){

  Workout.find({_id: req.params.id}).exec(function(err, doc){
    if(err){
      console.log(err)
    }else{
      res.send(doc)
    }
  });
});

//route to get all users
app.get("/api/users", function(req, res) {
  //find all in the User collection
  User.find({}).exec(function(err, doc) {
    if (err) {
      console.log(err);
    } else {
      res.send(doc);
    }
  });
});

app.get("/api/users/id/:id", function(req, res) {
  //find all in the User collection
  User.find({_id:req.params.id}).exec(function(err, doc) {
    if (err) {
      console.log(err);
    } else {
      res.send(doc);
    }
  });
});


//route to get one user
app.get("/api/users/:username", function(req, res) {
  //find all in the User collection
  User.find({username:{ "$regex": req.params.username, "$options": "ix" }})
  .exec(function(err, doc) {
    if (err) {
      console.log(err);
    } else {
      res.send(doc);
    }
  });
});



//get all exercises
app.get("/api/exercises", function(req, res) {
  Exercise.find({}).exec(function(err, doc) {
    if (err) {
      console.log(err)
    } else {
      res.send(doc)
    }
  });
});

app.get("/api/exercises/:muscleGroup/:mechanism", function(req, res) {
  Exercise.find({"muscleGroup": req.params.muscleGroup, "mechanics": req.params.mechanism}).exec(function(err, doc) {
    if (err) {
      console.log(err)
    } else {
      res.send(doc)
    }
  });
});

//---------------------------------------------------------------
//-----------Routes for adding info -----------------

//route to post a new workout
app.post("/api/workouts", function(req, res) {
  //make a new instance of Workout with the req.body
  var newWorkout = new Workout(req.body);
  console.log(req.body);
  //save the new workout
  newWorkout.save(function(err, doc) {
    if (err) {
      console.log(err);
    } else {
      res.send(doc);
    }
  });
});

//add new user


//add new exercise
app.post("/api/exercises", function(req, res) {
  var newExercise = new Exercise(req.body);
  console.log(req.body);

  newExercise.save(function(err, doc) {
    if (err) {
      console.log(err)
    } else {
      console.log(doc);
      res.send(doc);
    }
  });
});


//---------------------------------------------------------------
//---------------Routes for deleting ----------------------------

//delete workouts
app.delete("/api/workouts/:id", function(req, res) {
  var id = req.params.id

  Workout.find({_id:id}).remove().exec(function(err) {
    if (err) {
      console.log(err);
    } else {
      res.send("Deleted");
    }
  });
});


//---------------------------------------------------------------
//---------------Routes for Updating----------------------------


app.put("/api/workouts/:id", function(req, res) {
  var id = req.params.id;
  Workout.findOne({
    _id: id
  }, function(err, foundObject) {
    if (err) {
      console.log(err);
      res.status(500).send();
    } else {
      if (!foundObject) {
        res.status(404).send();
      } else {
        foundObject.workoutName = req.body.workoutName
      }
    }
  });
});

//add workout to user's list of created workouts
app.put("/api/userworkouts/add", function(req, res) {
  var id = req.body.currentUser;
  console.log(id);
  User.findById(id, function(err, p) {
    if (!p){
      console.log('Could not load Document');
      //dont execute if user id is already in the friends array
    }else if(p.workouts.indexOf(req.body.requestedId)<0){
      p.workouts.push(req.body.requestedId)}
      p.modified = new User();

      p.save(function(err) {
        if (err)
          console.log('error')
        else
          console.log('success')
      });
  });

});

//remove workout from the users list of created workouts
app.put("/api/userworkouts/delete", function(req, res) {
  var id = req.body.currentUser;
  console.log(id);
  User.findById(id, function(err, p) {
    if (!p){
      return (new Error('Could not load Document'));
      //dont execute if this user id is already in friends array
    }else if(p.workouts.indexOf(req.body.requestedId)>=0){
      p.workouts.splice(req.body.requestedId,1)}
      p.modified = new User();

      p.save(function(err) {
        if (err)
          console.log('error')
        else
          console.log('success')
      });
  });
});

//add workout to user's list of saved workouts
app.put("/api/savedworkouts/add", function(req, res) {
  var id = req.body.currentUser;
  console.log(id);
  User.findById(id, function(err, p) {
    if (!p){
      console.log('Could not load Document');
      //dont execute if user id is already in the friends array
    }else if(p.savedWorkouts.indexOf(req.body.requestedId)<0){
      p.savedWorkouts.push(req.body.requestedId)}
      p.modified = new User();

      p.save(function(err) {
        if (err)
          console.log('error')
        else
          console.log('success')
      });
  });
});

// remove workout from the user's list of saved workouts
app.put("/api/savedworkouts/delete", function(req, res) {
  var id = req.body.currentUser;
  console.log(id);
  User.findById(id, function(err, p) {
    if (!p){
      return (new Error('Could not load Document'));
      //dont execute if this user id is already in friends array
    }else if(p.savedWorkouts.indexOf(req.body.requestedId)>=0){
      p.savedWorkouts.splice(req.body.requestedId,1)}
      p.modified = new User();

      p.save(function(err) {
        if (err)
          console.log('error')
        else
          console.log('success')
      });
  });
});

//add user ID to user's ist of friends
app.put("/api/users/add", function(req, res) {
  var id = req.body.currentUser;
  console.log(id);
  User.findById(id, function(err, p) {
    if (!p){
      return (new Error('Could not load Document'));
      //dont execute if user id is already in the friends array
    }else if(p.friends.indexOf(req.body.requestedUser)<0){
      p.friends.push(req.body.requestedUser)}
      p.modified = new User();

      p.save(function(err) {
        if (err)
          console.log('error')
        else
          console.log('success')
      });
  });
});

//remove user id from the user's list of friends
app.put("/api/users/delete", function(req, res) {
  var id = req.body.currentUser;
  console.log(id);
  User.findById(id, function(err, p) {
    if (!p){
      return (new Error('Could not load Document'));
      //dont execute if this user id is already in friends array
    }else if(p.friends.indexOf(req.body.requestedUser)>=0){
      p.friends.splice(req.body.requestedUser,1)}
      p.modified = new User();

      p.save(function(err) {
        if (err)
          console.log('error')
        else
          console.log('success')
      });
  });
});
//---------------------------------------------------------------

// Any non API GET routes will be directed to our React App and handled by React Router
app.use('/new', users);

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/view/public/index.html",{title:'Form Validation', success:false, errors:req.session.errors});
  req.session.errors=null;
});

//listen on port
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
