import React from "react";

import { Link } from "react-router";
class Type extends React.Component{
		constructor(props){
		super();
		this.state = {
			workoutName:"",
			workoutType: "Sets and Reps",
			exercises: [],
			creatorId : ""
		}
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	
	}

	handleChange(event) {
		
	    console.log("TEXT CHANGED");
	    this.setState({workoutType: this.refs.wktType.value});

	    this.props.updateWorkoutType(this.state.workoutType);

	    console.log(this.props);
  }


 	handleSubmit(event){
	  	event.preventDefault();
	  	console.log("Clicked");
	  	console.log(this.state.workoutType);
	  	this.props.updateWorkoutType(this.state.workoutType);
  }

	render(){
		return(


			<form onSubmit={this.props.handleSubmit}>
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
					
					<button
					onClick={this.handleSubmit}
					
					className="btn btn-success"
					>
						<h4>Next</h4>
					</button>
					
				</div>
			</form>

			);
	}
}

export default Type;


