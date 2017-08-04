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
      workout: {
        exercises: [
          {
            reps: []
          }
        ]
      }
    }
    this.componentWillMount = this.componentWillMount.bind(this);
  }
  componentWillMount() {
    helpers.getWorkoutsById(this.props.workoutId).then(result => {
      this.setState({workout: result.data[0]})
    })
  }

  render() {
    console.log(this.state.workout);
    return (
      <div className="container-fluid">

        <div className="panel panel-info text-center">
          <div className="panel-heading">
            <h3 className="panel-title">{this.state.workout.workoutName}</h3>
          </div>
          <div className="panel-body">
            {this.state.workout.description}
          </div>
        </div>

        <div className="row">
          <Switch>
            <Route path="/workout/overview" render={() => {
              return <Overview workout={this.state.workout}/>
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
