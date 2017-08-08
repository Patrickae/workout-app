import React from "react";
import {Link} from "react-router-dom";

class FriendElement extends React.Component {
  constructor(){
    super();
    this.state={

    }
    this.handleRequest = this.handleRequest.bind(this);
  }

  handleRequest(){
    this.props.addFriend(this.props.id);
    console.log("clicked")
    var likeBtn = <img src="./images/64px-icons/like-full.png" className="img-responsive" alt="friend"/>;
  }


  render() {

      var likeBtn = <img src="./images/64px-icons/like.png"
        className="img-responsive"
        alt="not-friend"
        onClick={this.handleRequest}

        />;

      for(var i=0; i<this.props.currentUserFriends.length; i++) {
        if (this.props.currentUserFriends[i] === this.props.id) {
          likeBtn = <img src="./images/64px-icons/like-full.png" className="img-responsive" alt="friend"/>;
          break;
        };
      };

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
            {likeBtn}
          </div>
        </div>
      </div>
    )
  }
}

export default FriendElement;
