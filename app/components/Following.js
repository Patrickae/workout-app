import React from "react";
import {Link} from "react-router-dom"
import helpers from "../utils/helpers";
import FollowingModal from "./Following/FollowingModal";

class Following extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }
  //loop through friends array and get users by Id.
  componentWillMount() {
    helpers.getUserById(this.props.userId).then(data => {
      var friendIds = data[0].friends;
      var statePlaceholder = this.state.friends;
      for (var i = 0; i < friendIds.length; i++) {
        helpers.getUserById(friendIds[i]).then(result => {
          var statePlaceholder = this.state.friends;
          statePlaceholder.push(result[0]);
          this.setState({friends: statePlaceholder});
        });
      }
    });
  }
  //hide button
  hideBtn(){
    $(".show-hide").hide()
  }

  render() {
    //map all friends found from componentWillMount
    var friends = this.state.friends.map(item =>
    <div key={item._id}>
      <div className="media col-xs-12 col-sm-5 friend-element">
        <div className="media-left">
          <img src="./images/dumbbell.png" className="media-object" alt="view-friend" data-toggle="modal" data-target={"#"+item._id + "modal"} onClick={this.hideBtn}/>
        </div>
        <div className="media-body">
          <h3 className="media-heading">{item.username}</h3>
          <h4>{item.name}</h4>
          <h4>Workouts: {item.workouts.length}</h4>
        </div>
      </div>
      <div className="col-xs-0 col-sm-1"></div>
    </div>)

    var modals = this.state.friends.map(item =>
    <FollowingModal user={item} userId={this.props.userId} key={item._id}/>
  )

    return (
      <div className="container-fluid">
        <h1 className="text-center">View your favorites</h1>
        <hr/>
        <div className="col-xs-1"></div>
        <div className="col-xs-10">

          {friends}

        </div>

        <div className="col-xs-1"></div>
        {modals}
      </div>

    )
  }
}
export default Following;
