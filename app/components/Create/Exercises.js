import React from "react";
import helpers from "../../utils/helpers";

class Exercises extends React.Component{
		constructor(){
		super();
		this.state = {
			exercises: [],
			creatorId : ""
		}

	}


	render(){
		return(
				<form>
				<div className="form-group">
					<h4 className=""><strong>Exercise</strong></h4>
					<select
					value={this.props.exercises}
					className="form-control"
					id="search"
					ref="wktType"
					/*onChange={this.state.creatorId}*/
					required>
						<option>Bench Press</option>
						<option>Squat</option>
						<option>Shoulder Press</option>
						<option>Leg Press</option>
						<option>Dead Lift</option>	
					</select>
				</div>
				<div className="pull-right">
					<button
					type="submit"
					className="btn btn-success"
					>
						<h4>Next</h4>
					</button>
				</div>
			</form>
			)
	}
}

export default Exercises;