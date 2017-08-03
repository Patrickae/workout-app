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
        <div className="row">
          <h1>This will be the Current Exercise</h1>
        </div>
        <div className="row">
          <Link to="/workout/active/timer" className="btn btn-info">to Timer</Link>
        </div>
      </div>
    )
  }
};
export default CurrentExercise;
