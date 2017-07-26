import React from "react";

import { Link } from "react-router";
class Type extends React.Component{
		constructor(props){
		super();
		this.state = {
			workoutName:"",
			workoutType: "",
			exercises: [],
			creatorId : ""
		}
	this.handleChange = this.handleChange.bind(this);
	
	}

	handleChange(event) {
		
	    console.log("TEXT CHANGED");
	    this.setState({workoutType: this.refs.wktType.value});

	    console.log(this.props);
  }

 // 	handleSubmit(event){
	//   	event.preventDefault();
	//   	console.log("Clicked");
	//   	console.log(this.state.workoutType);
 //  }

	render(){
		return(


			<form onSubmit={this.props.handleSubmit}>
				<div className="form-group">
					<h4 className=""><strong>Workout Structure</strong></h4>
					<select
					value={this.props.workoutType}
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
					onClick={this.props.handleSubmit}
					type="submit"
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


