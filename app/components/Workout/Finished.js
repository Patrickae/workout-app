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
        <div className="row">
          <div className="col-xs-3"></div>
          <div className="col-xs-6">
            <img src="../images/64px-icons/gold-medal.png" alt="gold-medal" className="img-responsive"/>
          </div>
          <div className="col-xs-3"></div>
        </div>
        <br/>
        <div className="row">
          <Link to={"/home/" + this.props.userId} className="btn btn-success btn-block btn-lg">Home</Link>
        </div>
      </div>
    )
  }
};
export default Finished;
