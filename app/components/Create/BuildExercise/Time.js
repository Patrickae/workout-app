import React from "react";
import{ Link } from "react-router-dom";


class Time extends React.Component{
		constructor(props){
		super();
		this.state = {
			rest: 60
		}
	}

	addTime(){

	}
	subTime(){
		
	}
	render(){
		return(

			<div className="container">
				<form>
					<h3><strong>Rest Time:</strong></h3>
					<div className="form-group">
						<input 
						type="number"
						value={this.state.rest}
						class="form-control"
						>
						</input>
					</div>
				</form>
			</div>
			)
	}
}

export default Time