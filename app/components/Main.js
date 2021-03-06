import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import Workout from './Workout.js'
import Login from './Login'
import Register from './Register'
import Header from './Header'
import FriendSearch from './FriendSearch'
import Following from './Following'
import Edit from './Edit'

class Main extends React.Component {
  constructor() {
    super()
    //this.state.loggedIn will be used to determine navbar links
    this.state = {
      userId: '',
      loggedIn: false,
      currentWorkoutId: '',
    }
    this.loggedInTrue = this.loggedInTrue.bind(this)
    this.getUserId = this.getUserId.bind(this)
    this.setWorkoutId = this.setWorkoutId.bind(this)
    this.loggedInFalse = this.loggedInFalse.bind(this)
    this.getWorkouts = this.getWorkouts.bind(this)
  }
  //set logged in to true in order to change the nav bar
  loggedInTrue() {
    this.setState({ loggedIn: true })
  }
  loggedInFalse() {
    this.setState({ loggedIn: false })
  }
  //change the user id - pass this func to the home component
  getUserId(input) {
    this.setState({ userId: input })
  }
  //get workouts from home - allows them to be passed to Edit.js
  getWorkouts(wkts, savedWkts) {
    this.setState({ workouts: wkts })
    this.setState({ savedWorkouts: savedWkts })
  }

  //change the current workout- this is for using workouts
  setWorkoutId(input) {
    this.setState({ currentWorkoutId: input })
  }

  render() {
    return (
      <div id="main-container">
        <Header loggedIn={this.state.loggedIn} userId={this.state.userId} loggedInFalse={this.loggedInFalse} />
        <div className="container-fluid" id="body">
          <Switch>
            <Route
              path="/home/:userId"
              render={props => (
                <Home
                  {...props}
                  changeLogin={this.loggedInTrue}
                  getUserId={this.getUserId}
                  setWorkoutId={this.setWorkoutId}
                  getWorkouts={this.getWorkouts}
                />
              )}
            />

            <Route
              path="/create"
              render={() => {
                return <Create userId={this.state.userId} />
              }}
            />

            <Route
              exact
              path="/"
              render={() => {
                return <Login />
              }}
            />

            <Route
              path="/register"
              render={() => {
                return <Register />
              }}
            />
            <Route
              path="/workout"
              render={() => {
                return <Workout workoutId={this.state.currentWorkoutId} userId={this.state.userId} />
              }}
            />
            <Route
              path="/friendsearch"
              render={() => {
                return <FriendSearch userId={this.state.userId} />
              }}
            />
            <Route
              path="/following"
              render={() => {
                return <Following userId={this.state.userId} />
              }}
            />
            <Route
              path="/edit"
              render={() => {
                return (
                  <Edit
                    userId={this.state.userId}
                    workouts={this.state.workouts}
                    savedWorkouts={this.state.savedWorkouts}
                  />
                )
              }}
            />
          </Switch>
        </div>
      </div>
    )
  }
}

export default Main

// <Route path="/home/:userId" component={Home}/>
