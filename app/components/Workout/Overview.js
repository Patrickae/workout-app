import React from "react";
import {Link} from "react-router-dom";

class Overview extends React.Component {
  constructor() {
    super();
    this.state = {}

  }

  render() {
    var overview = this.props.workout.exercises.map((item, index) =>
    <div key={index} className="panel panel-success">
      <div className="panel-heading">
        <h3 className="panel-title">{item.currentName}</h3>
      </div>
      <div className="panel-body">
        <ul className="list-group">
          {item.reps.map((data, index) => <li key={index} className="list-group-item">
            Set {index + 1}: {data}Reps
          </li>)}
        </ul>
        <h5>Rest: {item.rest}
          Seconds</h5>
      </div>
    </div>)

    console.log(this.props.workout.exercises);

    return (
      <div className="container">
        <div className="row text-center">
          <div className="panel panel-info text-center">
            <div className="panel-heading">
              <h3 className="panel-title">{this.props.workout.workoutName}</h3>
            </div>
            <div className="panel-body">
              {this.props.workout.description}
            </div>
          </div>
          <h3>Overview</h3>

          {overview}

        </div>
        <div className="row">
          <Link to="/workout/active/current" className="btn btn-info btn-block btn-lg">Begin</Link>
        </div>
        <br/>
        <div className="row">
          <Link to={"/home/"+this.props.userId} className="btn btn-danger btn-block btn-lg">Back</Link>
        </div>
        <br/>
      </div>
    )
  }
};
export default Overview;
