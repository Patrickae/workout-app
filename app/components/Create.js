import React from "react";
import { Switch, Route } from 'react-router-dom'

import { Link } from "react-router-dom";
import Name from "./Create/Name";
import Exercises from "./Create/Exercises";
import Type from "./Create/Type";
import Review from "./Create/Review";
import helpers from "../utils/helpers";

class Create extends React.Component{

	constructor(){
		super();
		this.state = {
			workoutName:"Foo",
			type: "",
			exercises: [],
			creatorId : "123",
			description:""

		}
		this.handleSubmitType = this.handleSubmitType.bind(this);
		this.handleNewExercise = this.handleNewExercise.bind(this);
		this.saveWorkout = this.saveWorkout.bind(this);
		this.addNameAndDescription = this.addNameAndDescription.bind(this);
	}
	//function for saving the exercise type. this will be passed to Type.js
 	handleSubmitType(input){
	  	console.log("Clicked");
	  	this.setState({type: input})
  	}

  	handleNewExercise(input){

  		var exerciseArray = this.state.exercises;
  		exerciseArray.push(input);
  		this.setState({exercises: exerciseArray});
  	}
  	addNameAndDescription(name, descrip){
  		this.setState({workoutName:name, description:descrip});
  	}
		saveWorkout(){
			console.log(this.state);
			helpers.saveWorkout(this.state)
		}

	render(){

		return(
			<div>

				<div className="row">
					<div className="jumbotron text-center" id="jumbo">
						<h1>Create a New Workout</h1>
					</div>
				</div>



				<Switch>
					<Route path="/create/type" render={()=>{
						return <Type setParent={this.handleSubmitType} />
						}}/>
					<Route path="/create/exercises" render={() =>{
						return <Exercises pushExerciseToParent={this.handleNewExercise} type={this.state.type} />
					}  }/>
					<Route path="/create/name" render={() =>{
						return <Name addNameAndDescription={this.addNameAndDescription} save={this.saveWorkout} />
					}  }/>
				<Route path="/create/review" render={() =>{
						return <Review exercises={this.state.exercises} type={this.state.type} />
					}  }/>

				</Switch>





			</div>

			);
	}
}

export default Create;
