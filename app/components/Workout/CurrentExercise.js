import React from "react";
import {Link} from "react-router-dom";

class CurrentExercise extends React.Component {
  constructor() {
    super();
    this.state={

    }
  }
  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <h3>Set {this.props.repNumber +1} </h3>
          <hr/>
          <h1>{this.props.exercise.currentName} X {this.props.exercise.reps[this.props.repNumber]}</h1>
          
        </div>
        <div className="row">
          <Link to="/workout/active/timer" className="btn btn-info">to Timer</Link>
        </div>
      </div>
    )
  }
};
export default CurrentExercise;
