import React from 'react'
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom'
import CurrentExercise from './CurrentExercise'
import Timer from './Timer'

class ActiveWorkout extends React.Component {
  constructor() {
    super()
    this.state = {
      exerciseIndex: 0,
      repIndex: 0,
      exercise: '',
      path: '/workout/active/timer',
      message: '',
    }
    this.componentWillMount = this.componentWillMount.bind(this)
    this.nextRep = this.nextRep.bind(this)
  }

  componentWillMount() {
    this.setState({ exercise: this.props.workout.exercises[0] })
  }

  nextRep() {
    var repHolder = this.state.repIndex
    repHolder++

    if (
      repHolder >= this.state.exercise.reps.length - 1 &&
      this.state.exerciseIndex >= this.props.workout.exercises.length - 1
    ) {
      this.setState({ path: '/workout/finished' })
      this.setState({ repIndex: repHolder })
    } else if (repHolder < this.state.exercise.reps.length) {
      //areplace repIndex with the repHolder
      this.setState({ repIndex: repHolder })
      //if repHolder is greater than the length of the reps
    } else if (repHolder >= this.state.exercise.reps.length - 1) {
      //add one to the exercise number
      this.setState({ repIndex: 0 })
      var exerciseHolder = this.state.exerciseIndex
      exerciseHolder++
      if (exerciseHolder < this.props.workout.exercises.length) {
        this.setState({ exerciseIndex: exerciseHolder })
        this.setState({ exercise: this.props.workout.exercises[exerciseHolder] })
      }
    }
  }

  render() {
    console.log(this.props.workout)
    return (
      <div className="container-fluid">
        <Switch>
          <Route
            path="/workout/active/current"
            render={() => {
              return (
                <CurrentExercise
                  exerciseIndex={this.state.exerciseIndex}
                  repIndex={this.state.repIndex}
                  exercise={this.state.exercise}
                  path={this.state.path}
                  nextRep={this.nextRep}
                />
              )
            }}
          />
          <Route
            path="/workout/active/timer"
            render={() => {
              return (
                <Timer
                  exerciseIndex={this.state.exerciseIndex}
                  repIndex={this.state.repIndex}
                  exercise={this.state.exercise}
                  path={this.state.path}
                />
              )
            }}
          />
        </Switch>
        <hr />
        <h3>Current Exercise Overview</h3>
        <div className="panel panel-success">
          <div className="panel-heading">
            <h3 className="panel-title">{this.state.exercise.currentName}</h3>
          </div>
          <div className="panel-body">
            <ul className="list-group">
              {this.state.exercise.reps.map((data, index) => (
                <li key={index} className="list-group-item">
                  Set {index + 1}: {data}Reps
                </li>
              ))}
            </ul>
            <h5>
              Rest: {this.state.exercise.rest}
              Seconds
            </h5>
          </div>
        </div>
      </div>
    )
  }
}

export default ActiveWorkout
