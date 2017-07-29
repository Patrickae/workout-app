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

        <Link to="/create/exercises/search"><button className="btn btn-primary"><h3>Add Another Exerise</h3></button></Link>

        <Link to="/create/name"><button className="btn btn-success"><h3>Name and Save Your Workout</h3></button></Link>
      </div>
    )
  }
}

export default Review;
