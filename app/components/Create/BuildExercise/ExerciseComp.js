import React from "react";
import {Link} from "react-router-dom";

class ExerciseComp extends React.Component {

  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.props.addExercise(this.props.exerciseName, this.props.id);
  }

  render() {

    return (
      <div className="col-xs-6 col-md-3" key={this.props.id} id="exercise-search-result">

          <div className="well" key={this.props.id}>
            <div className="row text-center">
              <h5>{this.props.exerciseName}</h5>
            </div>
					<hr/>
            <div className="row">
              <img id="excsImg" src={this.props.image} alt={this.props.exerciseName} className="img-responsive"/>
            </div>
						<br/>
            <div className="row">
              <div className="col-xs-5">
                <a href={this.props.URL} target="_blank">
                  <img className="img-responsive" src="../images/64px-icons/info.png" alt="info"></img>
                </a>
              </div>

              <div className="col-xs-7 text-right" onClick={this.handleSubmit}>
                <Link to="/create/exercises/reps">
                  <img className="img-responsive" src="../images/64px-icons/check.png" alt="select"></img>
                </Link>
              </div>
            </div>
          </div>

      </div>
    )
  };
}

export default ExerciseComp;
