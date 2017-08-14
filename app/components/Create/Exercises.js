import React from "react";
import helpers from "../../utils/helpers";
import { Switch, Route } from "react-router-dom";
import ExerciseComp from "./BuildExercise/ExerciseComp";
import ExerciseSearch from "./BuildExercise/ExerciseSearch";
import Reps from "./BuildExercise/Reps";
import Time from "./BuildExercise/Time";

class Exercises extends React.Component{
		constructor(){
		super();
		this.state = {
			currentName:"",
			currentId:"",
			reps:[],
			rest:"60"
					}
		this.addExercise = this.addExercise.bind(this);
		this.handleAddReps = this.handleAddReps.bind(this);
		this.handleAddTime = this.handleAddTime.bind(this);
		this.pushToParent = this.pushToParent.bind(this);

	};

	//load the exercises from the api to the component state


	addExercise(name, id){
		this.setState({currentName:name, currentId:id});
	}

	handleAddReps(input){

		this.setState({reps: input});
	}
	handleAddTime(input){
		this.setState({rest: input});

	}
	pushToParent(){
		this.props.pushExerciseToParent(this.state);
	}


	render(){


		return(<div className="container">
					<div className="row" id="exercise-builder">


						<Switch>
							{/*Render the search component*/}
							<Route path="/create/exercises/search" render={()=>{
								return <ExerciseSearch setParent={this.addExercise} />
							}}/>
								{/*Render the reps component*/}
							<Route path="/create/exercises/reps" render={() =>{
								return <Reps setParent={this.handleAddReps} />
							}  }/>
								{/*render the time component*/}
							<Route path="/create/exercises/time" render={() =>{
								return <Time setParent={this.handleAddTime} saveExercise={this.pushToParent}/>
							}  }/>
						</Switch>
					</div>
					<div className="row" id="workout-review">
					<h1>This exercise</h1>
						<h3>{this.state.currentName}</h3>
						<ul >
						{
							this.state.reps.map((item, index) =>
								<li key={index}>Set {index + 1}: {item} Reps</li>
								)
						}
						</ul>
						<h3>Rest Time Between Sets: {this.state.rest} Seconds</h3>
					</div>

				</div>

			)
	}
}

export default Exercises;
