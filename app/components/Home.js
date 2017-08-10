import React from "react";
import helpers from "../utils/helpers"
import {Link, Route} from "react-router-dom";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      userId:"",
      //blank version of expected data.This is so if no result, map will not return error
      workouts:[],
      savedWorkouts:[]
    }
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
    //get ID from the URL path and update this state
    var Id = this.props.match.params.userId;
    this.setState({userId: Id})
    //also pass it to the Main component
    this.props.getUserId(Id);

    //get user by this id
    helpers.getUserById(Id).then(data=>{
      //set vars equal to the user's existing workouts(arrays of IDs)
      var wktsList = data[0].workouts;
      var svdWktsList = data[0].savedWorkouts;
      //placeholders where full workout objects will be pushed
      var workoutsHolder =[];
      var savedWorkoutsHolder=[];

      //for the length of this user's workouts array
      for(var i=0; i<wktsList.length; i++){
        //get the full workout by ID
        helpers.getWorkoutsById(wktsList[i]).then(result=>{
          //push the result to the placeholder
          workoutsHolder.push(result.data[0]);
          //set the placeholder as the state
          this.setState({workouts:workoutsHolder});
        })
      }

      //repeat above, but for savedWorkouts array
      for(var i=0; i<svdWktsList.length; i++){
        //get the full workout by Id
        helpers.getWorkoutsById(svdWktsList[i]).then(result=>{
          savedWorkoutsHolder.push(result.data[0]);
          //push it to the placeholder and then set the placeholder as the state
          this.setState({savedWorkouts:savedWorkoutsHolder});
        })
      }
      //pass full workout arrays to the Main component
      this.props.getWorkouts(workoutsHolder,savedWorkoutsHolder)
    });
    //changes state.loggedIn to true in the main component(for navbar)
    this.props.changeLogin();
  }




  render() {
    //map the workouts and savedWorkouts arrays and return list groups(and reverse them so newest first)
    var myWorkouts = this.state.workouts.map((item) =>
    <div className="list-group-item" key={item._id} onClick={() => {
      this.props.setWorkoutId(item._id)}}>
      <Link to="/workout/overview" className="list-group-item">
        <h4 className="list-group-item-heading">{item.workoutName}</h4>
        <p className="list-group-item-text">{item.description}</p>
      </Link>
    </div>).reverse();

    var mySavedWorkouts = this.state.savedWorkouts.map((item) =>
    <div className="list-group-item" key={item._id} onClick={() => {
      this.props.setWorkoutId(item._id)}}>
      <Link to="/workout/overview" className="list-group-item">
        <h4 className="list-group-item-heading">{item.workoutName}</h4>
        <p className="list-group-item-text">{item.description}</p>
      </Link>
    </div>).reverse();

    return (
      <div className="container-fluid" id="home">

        <div className="col-xs-12 col-sm-6">
          <div className="text-center" id="home-header">
            <div className="row home-option" id="home-create">
              <div className="col-xs-12 text-center">
                <Link to="/create/type">
                  <img className="img-responsive" src="../images/64px-icons/weights.png"></img>
                  <h5>Create Workout</h5>
                </Link>
              </div>
            </div>
            <div className="row home-option" id="home-search">
              <div className="col-xs-12 text-center">
                <Link to="/following">
                  <img className="img-responsive" src="../images/64px-icons/followers.png"></img>
                  <h5>Your Friends</h5>
                </Link>
              </div>
            </div>
            <div className="row home-option" id="home-friends">
              <div className="col-xs-12 text-center">
                <Link to="/friendsearch">
                  <img className="img-responsive" src="../images/64px-icons/006-search.png"></img>
                  <h5>Search for Users</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6">
          <div className="container-fluid">
            <h3>
              Your Created Workouts
            </h3>
            <hr/>
            <ul className="list-group home-workout-list">
              {myWorkouts}
            </ul>
          </div>
          <div className="container-fluid">
            <h3>
              Your Saved Workouts
            </h3>
            <hr/>
            <ul className="list-group home-workout-list">
              {mySavedWorkouts}
            </ul>
          </div>
        </div>
      </div>
    )
  }
};

export default Home;
