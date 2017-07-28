import React from "react";
import { Link } from "react-router-dom";

class ExerciseComp extends React.Component{

	constructor(){
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event){
		event.preventDefault();
		this.props.addExercise(this.props.exerciseName, this.props.id);
	}

	render(){
		return(
				<div className = "col-xs-6" key={this.props.id}>
					<div className = "well" key={this.props.id}>
						<h6>{this.props.exerciseName}</h6>
						<img src={this.props.image} alt={this.props.exerciseName} className="img img-responsive"/>

						<a href={this.props.URL} target="_blank"><i className="fa fa-info-circle" aria-hidden="true"></i></a>
						<div className="align-right">
							<Link to="/create/exercises/reps">
								<i 
								className="fa fa-check-circle fa-2x" 
								aria-hidden="true"
								onClick={this.handleSubmit}
								>
								</i>
							</Link>
						</div>
					</div>
				</div>
			)
	};
}

export default ExerciseComp;