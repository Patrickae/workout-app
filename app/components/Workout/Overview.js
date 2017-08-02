import React from "react";
import {Link} from "react-router-dom";

class Overview extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>This will be the overview of the workout</h1>
        </div>
        <div className="row">
          <Link to="/workout/active/current" className="btn btn-info">Start Workout</Link>
        </div>
      </div>
    )
  }
};
export default Overview;
