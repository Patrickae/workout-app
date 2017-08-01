import React from "react";
import { Link } from "react-router-dom";

class Review extends React.Component{
  render(){

    return(
      <div className="container">
        <h1>Overview</h1>
        {this.props.exercises.map((item,index)=>
          <div className="row" key={index}>
            <div className="well">
              <h3>{item.currentName}</h3>
                <ul>
                  {item.reps.map((repItem, index)=><li key={index}>Set {index+1}:{repItem} Reps</li>)}
                </ul>
                <h5>{item.rest}</h5>
            </div>
          </div>
        )}

        <Link to="/create/exercises/search" className="btn btn-info btn-lg btn-block">Add Next Exercise</Link>

        <Link to="/create/name" className="btn btn-success btn-block btn-lg">Complete</Link>

      </div>
    )
  }
}

export default Review;
