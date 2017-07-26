import React from "react";

import { Link } from "react-router";
class Type extends React.Component{
		constructor(){
		super();
		this.state = {
			workoutName:"",
			workoutType:"",
			exercises: [],
			creatorId : ""
		}
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		
	    console.log("TEXT CHANGED");
	    this.setState({workoutType: this.refs.wktType.value});
  }

 	handleSubmit(event){
	  	event.preventDefault();
	  	console.log("Clicked");
	  	console.log(this.state.workoutType);
  }

	render(){
		return(


			<form onSubmit={this.handleSubmit}>
				<div className="form-group">
					<h4 className=""><strong>Workout Structure</strong></h4>
					<select
					value={this.state.workoutType}
					className="form-control"
					id="search"
					ref="wktType"
					onChange={this.handleChange}
					required>
						<option>Sets and Reps</option>
						<option>Circuits</option>	
					</select>
				</div>
				<div className="pull-right">
					<Link to="Create/Exercises">
					<button
					type="submit"
					className="btn btn-success"
					>
						<h4>Next</h4>
					</button>
					</Link>
				</div>
			</form>

			);
	}
}

export default Type;


