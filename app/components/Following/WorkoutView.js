import React from "react";

class WorkoutView extends React.Component{
  constructor(){
    super();
    this.state = {
      exercises:[]
    }
    this.setExercise = this.setExercise.bind(this);
    this.clearExercises = this.clearExercises.bind(this);
  }

  setExercise(input){
    this.setState({exercises: input});
    $(`#${this.props.id}`).show();

  }
  clearExercises(){
    this.setState({exercises: []});
    $(`#${this.props.id}`).hide();
  }

  render(){
    return(
      <div className="well text-center">
        <h2>{this.props.workoutName}</h2>
        <h4>{this.props.type}</h4>
        <h4>{this.props.description}</h4>
        <button className="btn btn-info" onClick={()=>{this.setExercise(this.props.exercises)}} >View</button>
        <button className="btn btn-success" onClick={()=>{this.props.saveExercise(this.props.id)}} data-dismiss="modal">Save</button>

        <div className="row">
          <br/>
          {this.state.exercises.map(data=>

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
            )}
        <br/>
        <button className='btn btn-danger show-hide' id={this.props.id} onClick={this.clearExercises}>Hide</button>
      </div>

    </div>

    )
  }
}

export default WorkoutView;
