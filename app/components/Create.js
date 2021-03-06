import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Link } from 'react-router-dom'
import Name from './Create/Name'
import Exercises from './Create/Exercises'
import Type from './Create/Type'
import Review from './Create/Review'
import helpers from '../utils/helpers'
import Done from './Create/Done'

class Create extends React.Component {
  constructor() {
    super()
    this.state = {
      workoutName: 'Foo',
      type: '',
      exercises: [],
      creatorId: '',
      description: '',
    }
    this.handleSubmitType = this.handleSubmitType.bind(this)
    this.handleNewExercise = this.handleNewExercise.bind(this)
    this.saveWorkout = this.saveWorkout.bind(this)
    this.addNameAndDescription = this.addNameAndDescription.bind(this)
  }
  //function for saving the exercise type. this will be passed to Type.js
  handleSubmitType(input) {
    console.log('Clicked')
    this.setState({ type: input })
  }

  handleNewExercise(input) {
    var exerciseArray = this.state.exercises
    exerciseArray.push(input)
    this.setState({ exercises: exerciseArray })
  }
  addNameAndDescription(name, descrip) {
    this.setState({ workoutName: name, description: descrip })
  }
  saveWorkout() {
    //save workout
    console.log(this.state)
    helpers.saveWorkout(this.state).then(result => {
      //then add wokout to user's workouts
      helpers.addWorkoutToUser(this.props.userId, result)
    })
  }
  componentWillMount() {
    this.setState({ creatorId: this.props.userId })
  }

  render() {
    return (
      <div className="container-fluid" id="create-container">
        <div className="row">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <div className="navbar-brand">
                  <img alt="Brand" src="../images/edit.png" />
                </div>
                <p className="navbar-text">Design a Workout</p>
              </div>
            </div>
          </nav>

          <Switch>
            <Route
              path="/create/type"
              render={() => {
                return <Type setParent={this.handleSubmitType} />
              }}
            />
            <Route
              path="/create/exercises"
              render={() => {
                return <Exercises pushExerciseToParent={this.handleNewExercise} type={this.state.type} />
              }}
            />
            <Route
              path="/create/name"
              render={() => {
                return (
                  <Name
                    addNameAndDescription={this.addNameAndDescription}
                    save={this.saveWorkout}
                    userId={this.props.userId}
                  />
                )
              }}
            />
            <Route
              path="/create/review"
              render={() => {
                return <Review exercises={this.state.exercises} type={this.state.type} />
              }}
            />
            <Route
              path="/create/done"
              render={() => {
                return <Done addNameAndDescription={this.addNameAndDescription} userId={this.props.userId} />
              }}
            />
          </Switch>
        </div>
      </div>
    )
  }
}

export default Create
