import React from "react";
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Home from "./Home";
import Create from "./Create";
import Workout from "./Workout.js";
import Login from "./Login";
import Register from "./Register";
import Header from "./Header"

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: "",
      loggedIn: false,
      currentWorkoutId: ""
    }
    this.loggedInTrue = this.loggedInTrue.bind(this);
    this.setUserId = this.setUserId.bind(this);
    this.setWorkoutId = this.setWorkoutId.bind(this);
  }
  //set logged in to true in order to change the nav bar
  loggedInTrue() {
    this.setState({loggedIn: true})
  }
  //change the user id
  setUserId(input) {
    helpers.getUser(input).then(result=>{
      this.setState({userTest: result})
    })

  }

  //change the current workout
  setWorkoutId(input) {
    this.setState({currentWorkoutId: input});
  }

  render() {
    return (

      <div>
        <Header loggedIn={this.state.loggedIn} userId={this.state.userId}/>
        <div className="container-fluid" id="body">
          <Switch>
            <Route path="/home" render={() => {
              return <Home changeLogin={this.loggedInTrue} userId={this.state.userId} setWorkoutId={this.setWorkoutId}/>
            }}/>

            <Route path="/create" render={() => {
              return <Create userId={this.state.userId}/>
            }}/>

            <Route exact path="/" render={() => {
              return <Login setUserId={this.setUserId} />
            }}/>

            <Route path="/register" render={() => {
              return <Register/>
            }}/>
          <Route path="/workout" render={() => {
              return <Workout workoutId={this.state.currentWorkoutId} />
            }}/>
          </Switch>
        </div>

      </div>

    );
  }

}

export default Main;
