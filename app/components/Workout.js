import React from "react";
import {Switch, Route, BrowserRouter, Link} from 'react-router-dom'
import ActiveWorkout from "./Workout/ActiveWorkout";
import Finished from "./Workout/Finished";
import Overview from "./Workout/Overview";
import helpers from "../utils/helpers";

class Workout extends React.Component {
  constructor() {
    super();
    this.state = {
      //init state is empty version of expected object
      //this will allow map method to work, even when empty
      workout: {
        exercises: [{reps: []}]
      }
    }
    this.componentWillMount = this.componentWillMount.bind(this);
  }
  componentWillMount() {
    //get the full workout from the ID and set it to the state
    helpers.getWorkoutsById(this.props.workoutId).then(result => {
      this.setState({workout: result.data[0]})
    })
  }

  render() {
    console.log(window.sessionStorage);
    return (
      <div className="container-fluid" id="workout-container">
        <div className="row">

        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <div className="navbar-brand" >
                <img alt="Brand" src="../images/weightlifting.png"/>
              </div>
							<p className="navbar-text">Get to Work!</p>
            </div>
          </div>
        </nav>

          <Switch>
            <Route path="/workout/overview" render={() => {
              return <Overview workout={this.state.workout} userId={this.props.userId}/>
            }}/>
            <Route path="/workout/active" render={() => {
              return <ActiveWorkout workout={this.state.workout}/>
            }}/>
            <Route path="/workout/finished" render={() => {
              return <Finished workout={this.state.workout} userId={this.props.userId}/>
            }}/>
          </Switch>

        </div>
      </div>
    )
  }
}

export default Workout;
