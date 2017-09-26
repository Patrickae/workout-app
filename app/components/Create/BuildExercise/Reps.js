import React from 'react'

import { Link } from 'react-router-dom'

class Reps extends React.Component {
  constructor() {
    super()
    this.state = {
      workoutName: '',
      workoutType: 'Sets and Reps',
      reps: [5],
    }
    this.addSets = this.addSets.bind(this)
    this.subtractSets = this.subtractSets.bind(this)
    this.addReps = this.addReps.bind(this)
    this.subtractReps = this.subtractReps.bind(this)
  }

  addSets() {
    event.preventDefault()
    var repHolder = this.state.reps
    if (repHolder.length < 10) {
      repHolder.push(5)
      this.setState({ reps: repHolder })
    }
  }

  subtractSets() {
    var repHolder = this.state.reps
    if (repHolder.length > 1) {
      repHolder.pop()
      this.setState({ reps: repHolder })
    }
  }

  addReps(data) {
    var numberHolder = this.state.reps[data]
    numberHolder++
    if (numberHolder <= 100) {
      var arrayHolder = this.state.reps
      arrayHolder.splice(data, 1, numberHolder)
      this.setState({ reps: arrayHolder })
    }
  }

  subtractReps(data) {
    event.preventDefault()
    var numberHolder = this.state.reps[data]
    numberHolder--
    if (numberHolder > 0) {
      var arrayHolder = this.state.reps
      arrayHolder.splice(data, 1, numberHolder)

      this.setState({ reps: arrayHolder })
    }
  }

  render() {
    const repSelector = this.state.reps.map((item, index) => (
      <div className="row" key={index}>
        <h4 className="">
          <strong>
            Set {index + 1}
            Reps:
          </strong>
        </h4>
        <div className="form-group col-xs-6">
          <input type="number" value={item} className="form-control" ref="setsNumber" readOnly required />
        </div>
        <div className="pull-left col-xs-3">
          <img
            src="../images/64px-icons/minus.png"
            className="img-responsive"
            onClick={() => {
              this.subtractReps(index)
            }}
          />
        </div>
        <div className="pull-right col-xs-3">
          <img
            className="img-responsive"
            src="../images/64px-icons/plus.png"
            onClick={() => {
              this.addReps(index)
            }}
          />
        </div>
      </div>
    ))

    return (
      <div className="container">
        <div className="row">
          <form onSubmit={this.props.handleSubmit}>
            <h3 className="">
              <strong>How Many Sets?</strong>
            </h3>
            <div className="form-group col-xs-6">
              <input
                type="number"
                value={this.state.reps.length}
                className="form-control"
                ref="setsNumber"
                readOnly
                required
              />
            </div>

            <div className="pull-left col-xs-3">
              <img className="img-responsive" src="../images/64px-icons/minus.png" onClick={this.subtractSets} />
            </div>
            <div className="pull-right col-xs-3">
              <img className="img-responsive" src="../images/64px-icons/plus.png" onClick={this.addSets} />
            </div>
          </form>
        </div>
        <hr /> {repSelector}
        <div className="row">
          <br />
          <Link to="/create/exercises/time">
            <img
              className="img-responsive"
              src="../images/64px-icons/check.png"
              onClick={() => this.props.setParent(this.state.reps)}
            />
          </Link>
        </div>
      </div>
    )
  }
}

export default Reps
