import React from "react";


import { Link } from "react-router-dom";


class Sets extends React.Component{
		constructor(props){
		super();
		this.state = {
			workoutName:"",
			workoutType: "Sets and Reps",
			exercises: [],
			sets: 1
		}
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	
	}

	handleChange(event) {

  }


 	handleSubmit(event){

  }

	render(){
		return(


			<form onSubmit={this.props.handleSubmit}>
				<div className="form-group">
					<h4 className=""><strong>How Many Sets?</strong></h4>
					<input
					type="number"
					min="0"
					max="10"
					step="1"
					value= "1"
					className="form-control"
					ref="setsNumber"
					onChange={this.handleChange}
					required>

					</input>
				</div>
				<div className="pull-right">
					
					<button
					onClick={this.handleSubmit}
					
					className="btn btn-success"
					>
						<h4>Submit</h4>
					</button>
					
				</div>
			</form>

			);
	}
}

export default Sets;


