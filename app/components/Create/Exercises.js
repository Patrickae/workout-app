import React from "react";
import helpers from "../../utils/helpers";
import { Link } from "react-router-dom";

class Exercises extends React.Component{
		constructor(){
		super();
		this.state = {
			exercises: [],
			currentSelection:"",
			reps:[],
			muscleGroup: "Legs",
			mechanics: "Compound"
		}
		this.handleChange=this.handleChange.bind(this);
		this.componentWillMount=this.componentWillMount.bind(this);
		this.filterExercise=this.filterExercise.bind(this);
	};

	//handle change in form values
	handleChange(event){

		this.setState({muscleGroup: this.refs.muscleGroup.value});
		this.setState({mechanics: this.refs.mechanics.value});
	};
	//load the exercises from the api to the component state
	componentWillMount(){
		helpers.getExercises().then(result => {
			this.setState({exercises: result.data})
		});	
	};
	//hide the exercise list - we dont want it to show untill searched
	componentDidMount(){
		$("#exerciseList").hide();
	};
	//
	filterExercise(event){
		event.preventDefault();
		var group=this.state.muscleGroup;
		var mech = this.state.mechanics
		//use helper function to return exercises meeting the criteria
		helpers.exerciseSearchResults(group, mech).then(result =>{
			console.log(result);
			this.setState({exercises:result.data})
		});	
		//fade in	
		$("#exerciseList").fadeOut(500);
		setTimeout($("#exerciseList").fadeIn(1000), 1000)
	};
	addExercise(){}

	render(){


			var exercisesDisplay=this.state.exercises.map(data =>
				<div className = "col-xs-6" key={data._id}>
					<div className = "well" key={data._id}>
						<h6>{data.exerciseName}</h6>
						<img src={data.image} alt={data.exerciseName} className="img img-responsive"/>

						<a href={data.URL} target="_blank"><i className="fa fa-info"></i></a>
					</div>
				</div>

					);

		return(<div className="container">
					<div className="row">
						<form className="form-horizontal">
							<div className="form-group">
								<label className="control-label col-xs-3">Muscle Group:</label>
								<div className="col-xs-9">
									<select
									value={this.state.muscleGroup}
									className="form-control"
									ref="muscleGroup"
									onChange={this.handleChange}
									id="groupForm"
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
							</div>
							<div className="form-group">
								<label className="control-label col-xs-3">Mechanics:</label>
								<div className="col-xs-9">
									<select
									value={this.state.mechanics}
									className="form-control"
									ref="mechanics"
									onChange={this.handleChange}
									id="mechanicsForm"
									required>
										<option>Compound</option>
										<option>Isolated</option>			
									</select>
								</div>
							</div>
							<div className="pull-right">
								<button
								className="btn btn-success"
								onClick={this.filterExercise}
								>
									<h4>Button</h4>
								</button>
								<Link to="/create/sets"><button className="btn btn-danger">Sets</button></Link>
							</div>
						</form>
					</div>

					<div className="row" id="exerciseList">
						{exercisesDisplay}
					</div>

				</div>

			)
	}
}

export default Exercises;