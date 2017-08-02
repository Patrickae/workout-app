import React from "react";
import {Switch, Route, BrowserRouter, Link} from 'react-router-dom'
import ActiveWorkout from "./Workout/ActiveWorkout";
import Finished from "./Workout/Finished";
import Overview from "./Workout/Overview";

class Workout extends React.Component {
  constructor() {
    super();
    this.state = {
      workoutId: ""
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount(){
    this.setState({workoutId: this.props.workoutId})
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row text-center">
          <h1>This will be the workout name</h1>
          <h4>By: This will be the creator Name</h4>
        </div>
        <div className="row">
          <Switch>
            <Route path="/workout/overview" render={() => {
              return <Overview workout={this.state.workout}/>
            }}/>
            <Route path="/workout/active" render={() => {
              return <ActiveWorkout workout={this.state.workout}/>
            }}/>
            <Route path="/workout/Finished" render={() => {
              return <Finished workout={this.state.workout}/>
            }}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default Workout;
