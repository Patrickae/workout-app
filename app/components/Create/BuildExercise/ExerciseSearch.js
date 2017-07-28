import React from "react";
import { Link } from "react-router-dom";
import helpers from "../../../utils/helpers";
import ExerciseComp from "./ExerciseComp";

class ExerciseSearch extends React.Component{
	constructor(){
		super();
		this.state={
			exerciseList:[],
			muscleGroup: "Legs",
			mechanics: "Compound",
			name:"",
			id:""
		}
		this.handleChange = this.handleChange.bind(this);
		this.filterExercise = this.filterExercise.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);


	}
	//change state depending on value of form
	handleChange(event){
		this.setState({muscleGroup: this.refs.muscleGroup.value});
		this.setState({mechanics: this.refs.mechanics.value});
	};

	//hide the exercise list - we dont want it to show untill searched
	componentDidMount(){
		$("#exerciseList").hide();
	};
	handleSubmit(name, id){
		this.setState({name:name, id:id})
	}

	//filter exercises by whatever the current state is
	filterExercise(event){
		event.preventDefault();
		var group=this.state.muscleGroup;
		var mech = this.state.mechanics
		//use helper function to return exercises meeting the criteria
		helpers.exerciseSearchResults(group, mech).then(result =>{
			console.log(result);
			this.setState({exerciseList:result.data})
		});	
		//fade in	
		$("#exerciseList").fadeOut(500);
		setTimeout($("#exerciseList").fadeIn(1000), 1000)
	};


	render(){
		var exercisesDisplay=this.state.exerciseList.map(data =>
				<ExerciseComp 
				addExercise={this.props.setParent} 
				exerciseName={data.exerciseName} 
				id={data._id} key={data._id} 
				URL={data.URL} 
				image={data.image} />
					);
		return(
			<div className="container-fluid">
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
						<i className="fa fa-search fa-3x" 
						aria-hidden="true"
						onClick={this.filterExercise}>
						</i>					
					</div>
				</form>
				</div>

				<div className="row" id="exerciseList">
				{exercisesDisplay}
				</div>
			</div>

			)
	}
};

export default ExerciseSearch;