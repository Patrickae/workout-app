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
			rest:""
					}
		this.addExercise = this.addExercise.bind(this);
		this.handleAddReps = this.handleAddReps.bind(this);
		this.handleAddTime = this.handleAddTime.bind(this);

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

	render(){


		return(<div className="container">
					<div className="row">


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
							return <Time setParent={this.handleAddRest} />
						}  }/>
					</Switch>
					</div>

				</div>

			)
	}
}

export default Exercises;