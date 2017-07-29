import React from "react";
import{ Link } from "react-router-dom";


class Time extends React.Component{
		constructor(props){
		super();
		this.state = {
			rest: 60
		}
		this.addTime = this.addTime.bind(this);
		this.subTime = this.subTime.bind(this);
		this.componentWillUnmount = this.componentWillUnmount.bind(this);
	}

	addTime(){
		//set variable eqal to the state. add one to variable and then set that to the state
		var time = this.state.rest;
		time += 10;
		if(time<=300){
			this.setState({rest:time})
		}
	}
	subTime(){
		//same as above, but subtract
		var time = this.state.rest;
		time -= 10;
		if(time > 0){
			this.setState({rest:time})
		}
	}

	componentWillUnmount(){
		this.props.saveExercise();
	}


	render(){
		return(

			<div className="container">
				<form >
					<h3><strong>Rest Between Sets:</strong></h3>
					<div className="form-group col-xs-12">
						<input
						type="text"
						value={this.state.rest + " Seconds"}
						className="form-control"
						readOnly
						>
						</input>
					</div>
				</form>

				<div className="row">
					<div className="col-xs-2"></div>
					<div className="col-xs-4">
						<i
						 className="fa fa-minus-circle fa-5x"
						 onClick ={this.subTime}></i>
					</div>
					<div className="col-xs-4">
						<i
						className="fa fa-plus-circle fa-5x"
						onClick ={this.addTime}></i>
					</div>
					<div className="col-xs-2"></div>
				</div>

				<div className="row">
				<div className="col-xs-4"></div>
				<div className="col-xs-4">
					<Link to="/create/review">
						<i
						className="fa fa-check-circle fa-5x"
						onClick={()=>this.props.setParent(this.state.rest)}>
						</i>
					</Link>
				</div>
				<div className="col-xs-4"></div>
				</div>

			</div>
			)
	}
}

export default Time
