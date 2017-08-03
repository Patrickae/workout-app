import React from "react";
import {Link} from "react-router-dom";

class Finished extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>Workout Complete</h1>
        </div>
        <br/>
        <div className="row">
          <Link to={"/home/"+this.props.userId} className="btn btn-success btn-block btn-lg">Home</Link>
        </div>
      </div>
    )
  }
};
export default Finished;
