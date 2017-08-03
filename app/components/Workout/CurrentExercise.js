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
          <h3>Set {this.props.repIndex +1} </h3>
          <hr/>
          <h1>{this.props.exercise.currentName} X {this.props.exercise.reps[this.props.repIndex]}</h1>
        </div>
        <br/>
        <div className="row">
          <Link to={this.props.path} className="btn btn-info btn-block btn-lg">Set Completed</Link>
        </div>
      </div>
    )
  }
};
export default CurrentExercise;
