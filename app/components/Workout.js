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
        <div className="row">

        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <div className="navbar-brand col-xs-2" >
                <img alt="Brand" src="../images/64px-icons/barbell.png" className="img-responsive"/>
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
