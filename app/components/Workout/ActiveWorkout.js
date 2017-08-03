import React from "react";
import {Switch, Route, BrowserRouter, Link} from 'react-router-dom'
import CurrentExercise from "./CurrentExercise";
import Timer from "./Timer";

class ActiveWorkout extends React.Component{
  constructor(){
    super();
    this.state={
      exerciseNumber:0,
      repNumber:0,
      exercise:""
    }
    this.componentWillMount = this.componentWillMount.bind(this);
    this.nextRep = this.nextRep.bind(this);
  }

  componentWillMount(){
    this.setState({exercise: this.props.workout.exercises[0]})
  }

  nextRep(){
    var repHolder = this.state.repNumber;
    repHolder++;
    if(repHolder <= this.state.exercise.reps.length){
      this.setState({repNumber:repHolder})
    };
  }


  render(){
    console.log(this.props.workout)
    return(
      <div className="container-fluid">


      <Switch>
        <Route path="/workout/active/current" render={()=>{
            return <CurrentExercise exerciseNumber={this.state.exerciseNumber} repNumber={this.state.repNumber} exercise={this.state.exercise} />
          }}/>
        <Route path="/workout/active/timer" render={()=>{
            return <Timer exerciseNumber={this.state.exerciseNumber}
              repNumber={this.state.repNumber} exercise={this.state.exercise} nextRep={this.nextRep} />
          }}/>
      </Switch>

      </div>

    )
  }
}

export default ActiveWorkout;
