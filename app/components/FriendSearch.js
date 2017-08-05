import React from "react";
import {Link} from "react-router-dom";
import helpers from "../utils/helpers";

class FriendSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      usersList: [],
      friendQuery: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.filterUsers = this.filterUsers.bind(this);
  }
  handleChange() {
    this.setState({friendQuery: this.refs.friendQuery.value});
  }
  filterUsers() {
    // event.preventDefault();
    console.log("user filter button works");
    helpers.getUser(this.state.friendQuery).then(result=>{
      console.log(result)
    });
  }

  render() {

    return (
      <div className="container">
        <div className="row">
        <form>
          <div className="form-group">
            <h3>Search Name:</h3>
            <input type="text" ref="friendQuery" value={this.state.friendQuery} onChange={this.handleChange} className="form-control"/>
          </div>
        </form>
        <button className="btn btn-block btn-lg btn-success" onClick={this.filterUsers}>Search</button>
        </div>
        <div className="row">
        </div>
      </div>
    )
  }
}

export default FriendSearch;
