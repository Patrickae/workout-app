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
    return(
      <div className="container-fluid">


      <Switch>
        <Route path="/workout/active/current" render={()=>{
            return <CurrentExercise />
          }}/>
        <Route path="/workout/active/timer" render={()=>{
            return <Timer />
          }}/>
      </Switch>

      </div>

    )
  }
}

export default ActiveWorkout;
