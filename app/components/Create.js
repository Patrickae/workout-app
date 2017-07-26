import React from "react";


import { Link } from "react-router";
import { Type } from "./Create/Type";
import { Name } from "./Create/Name";
import { Exercises } from "./Create/Exercises";

class Create extends React.Component{

	constructor(){
		super();
		this.state = {
			workoutName:"Foo",
			workoutType:"Bar",
			exercises: ["Foo", "Wiz", "Bang"],
			creatorId : "123456"
		}
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		
	    console.log("TEXT CHANGED");
	    this.setState({workoutType: this.refs.wktType.value});
  }

 	handleSubmit(event){
	  	event.preventDefault();
	  	console.log("Clicked");
	  	console.log(this.state.workoutType);
  }



	render(){

		return(
			<div>

			<div className="row">
				<div className="jumbotron text-center" id="jumbo">
					<h1>Create a New Workout</h1>
				</div>
			</div>


			{this.props.children}


			</div>

			);
	}
}

export default Create;