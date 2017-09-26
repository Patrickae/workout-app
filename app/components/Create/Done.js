import React from 'react'
import { Link } from 'react-router-dom'

class Done extends React.Component {
  render() {
    return (
      <div className="text-center">
        <h1>Workout Created!</h1>
        <Link to={'/home/' + this.props.userId}>
          <button className="btn btn-success btn-lg btn-block">Home</button>
        </Link>
      </div>
    )
  }
}
export default Done
