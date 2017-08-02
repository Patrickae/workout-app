import React from "react";
import {Link} from "react-router-dom";

class Finished extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div class="container">
        <div className="row">
          <h1>This will show when finished. Yay!</h1>
        </div>
        <div className="row">
          <Link to="/home" className="btn btn-info">Home</Link>
        </div>
      </div>
    )
  }
};
export default Finished;
