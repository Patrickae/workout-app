import React from "react";
import {Link} from "react-router-dom";

class FriendElement extends React.Component {
  render() {
    return (
      <div className="well">
        <div className="row">
          <div className="col-xs-8">
            <h3>
              {this.props.name}</h3>
            <h4>
              {this.props.username}</h4>
            <h4>
              Workouts: {this.props.workouts.length}</h4>
          </div>
          <div className="col-xs-4">
            <img src="./images/64px-icons/like.png" className="img-responsive" alt="friend"/>
          </div>
        </div>
      </div>
    )
  }
}

export default FriendElement;
