import React from "react";
import {Link} from "react-router-dom";

class FriendElement extends React.Component {
  constructor(){
    super();
    this.state={
      friend: false
    }
    this.handleRequest = this.handleRequest.bind(this);
    this.deleteFriend = this.deleteFriend.bind(this);
  }

  handleRequest(){
    this.props.addFriend(this.props.id);
    console.log("clicked");
    this.setState({friend:true})

  }

  deleteFriend(){
    this.props.deleteFriend(this.props.id)
    this.forceUpdate()
    this.setState({friend:false})
  }



  render() {
    var buttonSwitch;
      if(this.props.currentUserFriends.indexOf(this.props.id)>=0 || this.state.friend===true){
    buttonSwitch = <img src="./images/64px-icons/like-full.png" className="img-responsive" alt="friend" onClick={this.deleteFriend}/>;
      }else{
        buttonSwitch = <img src="./images/64px-icons/like.png" className="img-responsive" alt="not-friend" onClick={this.handleRequest}/>;
        }


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
            {buttonSwitch}
          </div>
        </div>
      </div>
    )
  }
}

export default FriendElement;
