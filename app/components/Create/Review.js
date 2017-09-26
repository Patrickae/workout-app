import React from 'react'
import { Link } from 'react-router-dom'

class Review extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Overview</h1>
        {this.props.exercises.map((item, index) => (
          <div className="list-group" key={index}>
            <div to="/home" className="list-group-item">
              <h4 className="list-group-item-heading">{item.currentName}</h4>
              <p className="list-group-item-text">{item.description}</p>
              {item.reps.map((repItem, index) => (
                <p key={index} className="list-group-item-text">
                  Set {index + 1} : {repItem} Reps
                </p>
              ))}
              <p className="list-group-item-text">Rest time: {item.rest} seconds</p>
            </div>
          </div>
        ))}

        <Link to="/create/exercises/search" className="btn btn-info btn-lg btn-block">
          Add Next Exercise
        </Link>

        <Link to="/create/name" className="btn btn-success btn-block btn-lg">
          Complete
        </Link>
      </div>
    )
  }
}

export default Review
