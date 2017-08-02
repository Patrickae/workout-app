import React from "react";
import {Link} from "react-router-dom";

class Timer extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div class="container">
        <div className="row">
          <h1>This will be the timer</h1>
        </div>
        <div className="row">
          <Link to="/workout/active/current" className="btn btn-info">back to exercise</Link>
          <Link to="/workout/finished" className="btn btn-danger">Finished</Link>
        </div>
      </div>
    )
  }
};
export default Timer;
