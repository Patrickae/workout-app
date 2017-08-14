import React from "react";
import helpers from "../utils/helpers";

class Edit extends React.Component{
  constructor(){
    super();
    this.state={
      workouts:[],
      savedWorkouts:[]

    }
    this.deleteFriendWorkout = this.deleteFriendWorkout.bind(this);
    this.deleteMyWorkout = this.deleteMyWorkout.bind(this);
  }
  componentWillMount(){
    this.setState({workouts:this.props.workouts})
    this.setState({savedWorkouts:this.props.savedWorkouts})
  }
  deleteMyWorkout(wktId, indx){
    helpers.deleteWorkoutFromUser(this.props.userId, wktId);
    var holder = this.state.workouts;
    holder.splice(indx, 1);
    this.setState({workouts:holder});

  }
  deleteFriendWorkout(wktId, indx){
    helpers.deleteFriendWorkoutFromUser(this.props.userId, wktId);
    var holder = this.state.savedWorkouts;
    holder.splice(indx, 1);
    this.setState({savedWorkouts:holder});

  }

  render(){
    var myWorkouts = this.state.workouts.map((item, index) =>
    <div className="list-group-item edit-container" key={item._id} >

        <h4 className="list-group-item-heading">{item.workoutName}</h4>
        <p className="list-group-item-text">{item.description}</p>
        <div className="text-right">
      <i className="fa fa-trash fa-3x" onClick={()=>{this.deleteMyWorkout(item._id, index)}}></i>
      </div>
    </div>).reverse();

    var mySavedWorkouts = this.state.savedWorkouts.map((item, index) =>
    <div className="list-group-item edit-container" key={item._id} >

        <h4 className="list-group-item-heading">{item.workoutName}</h4>
        <p className="list-group-item-text">{item.description}</p>
          <div className="text-right">
        <i className="fa fa-trash fa-3x" onClick={()=>{this.deleteFriendWorkout(item._id, index)}}></i>
        </div>
    </div>).reverse();

    return(
      <div className="row">
      <div className="col-xs-12 col-sm-6">
        {/*take user to the create page*/}
        <div className="container-fluid">
          <h3>
            Your Created Workouts
          </h3>
          <hr/>
          <ul className="list-group home-workout-list">
            {myWorkouts}
          </ul>
        </div>
      </div>
      <div className="col-xs-12 col-sm-6">

        <div className="container-fluid">
          <h3>
            Your Saved Workouts
          </h3>
          <hr/>
          <ul className="list-group home-workout-list">
            {mySavedWorkouts}
          </ul>
        </div>

      </div>
    </div>
    )
  }

}
export default Edit;
