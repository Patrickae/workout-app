import React from "react";
import {Switch, Route, BrowserRouter, Link} from 'react-router-dom'
import CurrentExercise from "./CurrentExercise";
import Timer from "./Timer";

class ActiveWorkout extends React.Component{
  constructor(){
    super();
    this.state={

    }
  }


  render(){
    console.log(this.props.workout)
    return(
      <div className="container-fluid">


      <Switch>
        <Route path="/workout/active/current" render={()=>{
            return <CurrentExercise workout={this.props.workout} />
          }}/>
        <Route path="/workout/active/timer" render={()=>{
            return <Timer workout={this.props.workout} />
          }}/>
      </Switch>

      </div>

    )
  }
}

export default ActiveWorkout;
