import React from "react";
import helpers from "../../utils/helpers";
import WorkoutView from "./WorkoutView";

class FollowingModal extends React.Component {
  constructor(){
    super();
    this.state={
      workouts:[],
      exercises:[]
    }
    this.componentWillMount = this.componentWillMount.bind(this);
    this.saveExercise = this.saveExercise.bind(this);
  }
  componentWillMount(){
    var wktsList = this.props.user.workouts;
    var workoutsHolder = this.state.workouts;
    //for the length of this user's workouts array
    for(var i=0; i<wktsList.length; i++){
      //get the full workout by Id
      helpers.getWorkoutsById(wktsList[i]).then(result=>{
        workoutsHolder.push(result.data[0]);
        //push it to the placeholder and then set the placeholder as the state
        this.setState({workouts:workoutsHolder});
      })
    }
  }

  //save selected workout to user's savedWorkouts list
  saveExercise(thisId){
    helpers.addFriendWorkoutToUser(this.props.userId, thisId)
  }
  render(){

    var workouts = this.state.workouts.map((item,index)=>
          <WorkoutView key={item._id} workoutName={item.workoutName} id={item._id} exercises={item.exercises} saveExercise={this.saveExercise} description={item.description} type={item.type} />
    )

    return(
      <div className="modal fade" id={this.props.user._id + "modal"} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title" id="myModalLabel">{this.props.user.username}</h4>
          </div>
          <div className="modal-body">
            {workouts}
            
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>

          </div>
        </div>
      </div>
    </div>
    )
  }
}
export default FollowingModal;
