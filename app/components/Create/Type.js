import React from "react";

import { Link } from "react-router-dom";


class Type extends React.Component{
		constructor(){
		super();
		this.state = {		
			type: "Strength Training"
		}
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	
	}

	handleChange(event) {

		this.setState({type: this.refs.typeDiv.value})

  }


 	handleSubmit(event){
 		this.props.setParent(this.state.type);
  }

  componentWillUnmount(){
  	this.handleSubmit();
  }

	render(){
		return(

			<div>
			<form onSubmit={this.props.handleSubmit}>
				<div className="form-group">
					<label className="control label col-xs-6">What Type of Workout will this be?:</label>
					<select
					value= {this.state.type}
					className="form-control"
					ref="typeDiv"
					id="typeForm"
					onChange={this.handleChange}
					required>
					<option>Strength Training</option>
					<option>Full Body</option>
					<option>Calorie Burn</option>
					</select>
				</div>
				<div className="pull-right">
					
				<Link to="/create/exercises">
					<button className="btn btn-success">
						<h4>Next</h4>
					</button>
				</Link>
								
				</div>
			</form>

			
			</div>

			);
	}
}

export default Type;

