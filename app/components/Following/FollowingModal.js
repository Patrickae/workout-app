import React from "react";
import helpers from "../../utils/helpers";

class FollowingModal extends React.Component {
  constructor(){
    super();
    this.state={
      workouts:[],
      exercises:[]
    }
    this.componentWillMount = this.componentWillMount.bind(this);
    this.setExercises = this.setExercises.bind(this);
    this.clearExercises = this.clearExercises.bind(this);
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

  //set the exercise aray in the state in order to view when mapped
  setExercises(exerciseArray){
    this.setState({exercises: exerciseArray})
    $(".show-hide").show()
  }
  //clears state exercise array. this will make the list go away when user doesnt want to see it
  clearExercises(){
    this.setState({exercises: []})
    $(".show-hide").hide()
  }
  //save selected workout to user's savedWorkouts list
  saveExercise(thisId){
    helpers.addFriendWorkoutToUser(this.props.userId, thisId)
  }
  render(){

    var workouts = this.state.workouts.map((item,index)=>
      <div className="well text-center">
        <h2>{item.workoutName}</h2>
        <h4>{item.type}</h4>
        <h4>{item.description}</h4>
        <br/>
        <button className="btn btn-info" onClick={()=>{this.setExercises(this.state.workouts[index].exercises)}} >View</button>
        <button className="btn btn-success" onClick={()=>{this.saveExercise(this.state.workouts[index]._id)}}>Save</button>

        <div className="row">
          {this.state.exercises.map(data=>
            <div className="container">
            <div key={data.currentId} className="panel panel-success">
              <div className="panel-heading">
                <h3 className="panel-title">{data.currentName}</h3>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  {data.reps.map((reps, index) => <li key={index} className="list-group-item">
                    Set {index + 1}: {reps}Reps
                  </li>)}
                </ul>
                <h5>Rest: {data.rest}
                  Seconds</h5>
              </div>
            </div>
            </div>

          )}

          <button className="btn btn-danger show-hide" onClick={this.clearExercises}>Hide</button>
        </div>

      </div>
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
            {$("#show-hide").hide()}
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
