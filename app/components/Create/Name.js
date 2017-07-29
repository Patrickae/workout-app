import React from "react";

class Name extends React.Component{
	constructor(){
		super();
		this.state={
			workoutName:"",
			workoutDescrip:""
		}

	this.handleChange = this.handleChange.bind(this);
	}

	handleChange(){
		this.setState({workoutName: this.refs.wktName.value});
		this.setState({workoutDescrip: this.refs.wktDescrp.value})
	}
	handleSubmit(){
		event.preventDefault();
		console.log(this.state.workoutName, this.state.workoutDescrip);
	}
	render(){
		return(
			<div className="container">
				<form>
					<div className="form-group">
						<h3>Name your Workout</h3>
							<input
							type="text"
							value={this.state.workoutName}
							placeholder="Workout Name..."
							className="form-control"
							ref="wktName"
							onChange={this.handleChange}
							required>
							</input>
					</div>
					<div className="form-group">
						<h3>Short description of your workout</h3>
							<textarea
							type="text"
							placeholder="Description..."
							value={this.state.workoutDescrip}
							className="form-control"
							ref="wktDescrp"
							onChange={this.handleChange}
							required>
							</textarea>
					</div>
				</form>
				<div className="row">
					<div className="col-xs-4"></div>
						<div className="col-xs-4">
							<i
							className="fa fa-check-circle fa-5x"
							onClick={this.handleSubmit}
							>
							</i>
						</div>
					<div className="col-xs-4"></div>
				</div>
			</div>
			)
	};

};

export default Name;
