import React from "react";
import { Switch, Route } from 'react-router-dom'

import { Link } from "react-router-dom";
import Name from "./Create/Name";
import Exercises from "./Create/Exercises";
import Type from "./Create/Type";

class Create extends React.Component{

	constructor(){
		super();
		this.state = {
			workoutName:"Foo",
			exercises: ["Foo", "Wiz", "Bang"],
			creatorId : "123456",
			type: ""

		}
		this.handleSubmitType = this.handleSubmitType.bind(this);
		this.handleNewExercise = this.handleNewExercise.bind(this);
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
						return <Exercises pushExerciseToParent={this.handleNewExercise} />
					}  }/>
					
				</Switch>

				
			


			</div>

			);
	}
}

export default Create;