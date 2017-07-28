import React from "react";


import { Link } from "react-router-dom";


class Reps extends React.Component{
		constructor(){
		super();
		this.state = {
			workoutName:"",
			workoutType: "Sets and Reps",
			reps:[5]
		}
	this.addSets = this.addSets.bind(this);
	this.subtractSets = this.subtractSets.bind(this);
	this.addReps = this.addReps.bind(this);
	this.subtractReps = this.subtractReps.bind(this);
	
	}

	addSets(){
		event.preventDefault();
		var repHolder = this.state.reps
		if(repHolder.length <10){
			repHolder.push(5);
			this.setState({reps: repHolder})
		}
	}

	subtractSets(){
		var repHolder = this.state.reps
		if(repHolder.length > 1){
			repHolder.pop();
			this.setState({reps: repHolder})
		}
	}

	addReps(data){
		
		var numberHolder = this.state.reps[data];
		numberHolder++;
		if(numberHolder<=20){
			var arrayHolder = this.state.reps;
			arrayHolder.splice(data, 1, numberHolder);
			this.setState({reps: arrayHolder});
		}
	}

	subtractReps(data){
		event.preventDefault();
		var numberHolder = this.state.reps[data];
		numberHolder--;
		if(numberHolder > 0){
			var arrayHolder = this.state.reps;
			arrayHolder.splice(data, 1, numberHolder);

			this.setState({reps: arrayHolder});
		}

	}



	render(){

		const repSelector = this.state.reps.map((item, index) =>
				<div className="row" key={index}>

					
					<form className="form-horizontal">
					<h4 className=""><strong>Set {index + 1} Reps:</strong></h4>	
					<div className="form-group col-xs-8">
						<input
						type="number"
						value= {item}
						className="form-control"
						ref="setsNumber"
						readOnly
						required>

						</input>
					</div>
						<div className="pull-right col-xs-4">
						<i 
						className="fa fa-arrow-up fa-lg" 
						aria-hidden="true"
						onClick={()=>{this.addReps(index)}}
						>
						</i>
						<br/>	
						<i 
						className="fa fa-arrow-down fa-lg" 
						aria-hidden="true"
						onClick={()=>{this.subtractReps(index)}}
						>
						</i>
					</div>
					</form>
					
				</div>

			)


		return(

			<div className="container">
				<div className="row">
					<form onSubmit={this.props.handleSubmit}>
					<h4 className=""><strong>How Many Sets?</strong></h4>
						<div className="form-group col-xs-10">
							
							<input
							type="number"
							value= {this.state.reps.length}
							className="form-control"
							ref="setsNumber"
							readOnly
							required>

							</input>
						</div>
						<div className="pull-left col-xs-2">
							<i 
							className="fa fa-arrow-up fa-3x" 
							aria-hidden="true"
							onClick={this.addSets}>
							</i>
							<br/>	
							<i 
							className="fa fa-arrow-down fa-3x" 
							aria-hidden="true"
							onClick={this.subtractSets}>
							</i>
						</div>

					</form>
				</div>

				
					{repSelector}
					<div className="row">
					<i 
					className="fa fa-check-circle fa-4x" 
					aria-hidden="true"
					onClick={()=>this.props.setParent(this.state.reps)}>
					</i>
					
					</div>
			
			</div>

			);
	}
}

export default Reps;


