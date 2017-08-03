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
      currentExercise:""
    }
    this.setExercise = this.setExercise.bind(this);
  }

  setExercise(){
    var placehold = this.state.exerciseNumber;
    this.setState({currentExercise: this.props.workout.exercise[placehold]})
  }
  nextRep(){

  }


  render(){
    console.log(this.props.workout)
    return(
      <div className="container-fluid">


      <Switch>
        <Route path="/workout/active/current" render={()=>{
            return <CurrentExercise workout={this.props.workout} exerciseNumber={this.state.exerciseNumber} repNumber={this.state.repNumber}/>
          }}/>
        <Route path="/workout/active/timer" render={()=>{
            return <Timer workout={this.props.workout} exerciseNumber={this.state.exerciseNumber}
              repNumber={this.state.repNumber} />
          }}/>
      </Switch>

      </div>

    )
  }
}

export default ActiveWorkout;
