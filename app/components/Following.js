import React from "react";
import { Link } from "react-router-dom"
import helpers from "../utils/helpers";

class Following extends React.Component{
  constructor(){
    super();
    this.state={
      friends:[]
    }
  }
  componentWillMount(){
    helpers.getUserById(this.props.userId).then(data=>{
      var friendIds = data[0].friends;
      var statePlaceholder = this.state.friends;
      for (var i=0; i<friendIds.length; i++){
        helpers.getUserById(friendIds[i]).then(result=>{
          var statePlaceholder = this.state.friends;
          statePlaceholder.push(result[0]);
          this.setState({friends:statePlaceholder});
        });
      }

    });
  }

  render(){
    var friends = this.state.friends.map(item =>
      <div className="well">
        <div className="row">
          <div className="col-xs-8">
            <h3>{item.username}</h3>
            <h4>
              {item.name}</h4>
            <h4>
              Workouts: {item.workouts.length}</h4>
          </div>
          <div className="col-xs-4">
            <img src="./images/dumbbell.png" className="img-responsive" alt="view-friend" />
          </div>
        </div>
      </div>

    )
    return(
      <div class="container-fluid">
        <h1 className="text-center">View your favorites</h1>
        <hr/>
        <div className="col-xs-1"></div>
        <div className="col-xs-10">

          {friends}

      </div>

        <div className="col-xs-1"></div>
      </div>

    )
  }
}
export default Following;
