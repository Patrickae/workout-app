import React from "react";
import helpers from "../../utils/helpers";

class Exercises extends React.Component{
		constructor(){
		super();
		this.state = {
			exercises: [],
			creatorId : "",
			muscleGroup: "Legs",
			mechanics: "Compound"
		}
		this.handleChange=this.handleChange.bind(this);
		this.componentWillMount=this.componentWillMount.bind(this);
		this.filterExercise=this.filterExercise.bind(this);
	};

	handleChange(event){

		this.setState({muscleGroup: this.refs.muscleGroup.value});
		this.setState({mechanics: this.refs.mechanics.value});
	};

	componentWillMount(){
		helpers.getExercises().then(result => {
			this.setState({exercises: result.data})
		});
	};


	filterExercise(event){
		event.preventDefault();
		
		console.log("clicked");
		console.log(this.state.muscleGroup);
		console.log(this.state.mechanics);	
		var group=this.state.muscleGroup;
		var mech = this.state.mechanics

		helpers.exerciseSearchResults(group, mech).then(result =>{
			console.log(result);
			this.setState({exercises:result.data})
		});	
	};








	render(){


			var exercisesDisplay=this.state.exercises.map(data =>
				<div className = "col-xs-6" key={data._id}>
					<div className = "well" key={data._id}>
						<h4>{data.exerciseName}</h4>
						<img src={data.image} alt={data.exerciseName} className="img img-responsive"/>

						<a href={data.URL} target="_blank"><button className="btn btn-success">Choose</button></a>
					</div>
				</div>

					);

		return(<div>
					<div className="row">
						<form>
							<div className="form-group">
								<h4 className=""><strong>Muscle Group</strong></h4>
								<select
								value={this.state.muscleGroup}
								className="form-control"
								ref="muscleGroup"
								onChange={this.handleChange}
								/*onChange={this.state.creatorId}*/
								required>
									<option>Legs</option>
									<option>Chest</option>
									<option>Triceps</option>
									<option>Biceps</option>
									<option>Forearms</option>
									<option>Back</option>
									<option>Abs</option>	
									<option>Shoulders</option>
									<option>Calves</option>			
								</select>
							</div>
							<div className="form-group">
								<h4 className=""><strong>Isolated or Compound</strong></h4>
								<select
								value={this.state.mechanics}
								className="form-control"
								ref="mechanics"
								onChange={this.handleChange}
								/*onChange={this.state.creatorId}*/
								required>
									<option>Compound</option>
									<option>Isolated</option>			
								</select>
							</div>
							<div className="pull-right">
								<button
								className="btn btn-success"
								onClick={this.filterExercise}
								>
									<h4>Button</h4>
								</button>
							</div>
						</form>
					</div>

					<div className="row">
						{exercisesDisplay}
					</div>

				</div>

			)
	}
}

export default Exercises;