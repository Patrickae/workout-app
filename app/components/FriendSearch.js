import React from "react";
import {Link} from "react-router-dom";
import helpers from "../utils/helpers";
import FriendElement from "./FriendSearch/FriendElement"
class FriendSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      usersList: [],
      friendQuery: "",
      currentUser:""
    }
    this.handleChange = this.handleChange.bind(this);
    this.filterUsers = this.filterUsers.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
    this.addFriend = this.addFriend.bind(this);
    this.deleteFriend = this.deleteFriend.bind(this);
  }
  handleChange() {
    this.setState({friendQuery: this.refs.friendQuery.value});
  }
  filterUsers() {
    // event.preventDefault();
      if(this.state.friendQurey != "" ){
      helpers.getUserByUsername(this.state.friendQuery).then(result=>{
        this.setState({usersList:result})
      });
    }
  }

  addFriend(friendId){
    helpers.addFriend(this.props.userId, friendId).then(result=>{console.log(result)});
    helpers.addFriend(friendId, this.props.userId);
    console.log("adding friend");
  }

  deleteFriend(friendId){
    helpers.deleteFriend(this.props.userId, friendId).then(result=>{console.log(result)});
    helpers.deleteFriend(friendId, this.props.userId);
    console.log("deleting friend");
  }

componentWillMount(){
  helpers.getUserById(this.props.userId).then(data=>{
    this.setState({currentUser: data[0]})
  });

}

  render() {

    var friends = this.state.usersList.map(data =>
      <FriendElement username={data.username} name={data.name} workouts={data.workouts} id={data._id}
        currentUserFriends={this.state.currentUser.friends} key={data._id} addFriend={this.addFriend} deleteFriend={this.deleteFriend}/>  )

    return (
      <div className="container">
        <div className="row">
        <form>
          <div className="form-group">
            <h3>Search Username:</h3>
            <input type="text" ref="friendQuery" value={this.state.friendQuery} onChange={this.handleChange} className="form-control"/>
          </div>
        </form>
        <button className="btn btn-block btn-lg btn-success" onClick={this.filterUsers}>Search</button>
        </div>
        <div className="row">
          {friends}
        </div>
      </div>
    )
  }
}

export default FriendSearch;
