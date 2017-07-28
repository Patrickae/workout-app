import React from "react";
import helpers from "../../utils/helpers";
import { Switch, Route } from "react-router-dom";
import ExerciseComp from "./BuildExercise/ExerciseComp";
import ExerciseSearch from "./BuildExercise/ExerciseSearch";
import Reps from "./BuildExercise/Reps";

class Exercises extends React.Component{
		constructor(){
		super();
		this.state = {
			exercises: [],
			currentName:"",
			currentId:"",
			reps:[],
			rest:""
					}
		this.addExercise = this.addExercise.bind(this);
	};

	//load the exercises from the api to the component state


	addExercise(name, id){
		this.setState({currentName:name, currentId:id});
	}
	addReps(){

	}

	render(){


		return(<div className="container">
					<div className="row">


					<Switch>
					<Route path="/create/exercises/search" render={()=>{
						return <ExerciseSearch setParent={this.addExercise} />
						}}/>
					<Route path="/create/exercises/reps" render={() =>{
						return <Reps setParent={this.handleAddReps} />
					}  }/>
					
					</Switch>
					</div>

				</div>

			)
	}
}

export default Exercises;