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
			this.props.setParent(time);
		}
	}
	subTime(){
		//same as above, but subtract
		var time = this.state.rest;
		time -= 10;
		if(time > 0){
			this.setState({rest:time})
			this.props.setParent(time);
		}
	}

	componentWillUnmount(){
		this.props.saveExercise();

	}


	render(){
		return(

			<div className="container-fluid">
			<h3><strong>Rest Between Sets:</strong></h3>
			<div className="row">
			<div className="col-xs-12 col-sm-6">
				<form className="text-center">
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
				</div>

				<div className="col-xs-12 col-sm-6">

					<div className="col-xs-6">
						<img className="img-responsive" src="../images/64px-icons/minus.png"
							onClick={this.subTime}/>
					</div>
					<div className="col-xs-6">
						<img className="img-responsive" src="../images/64px-icons/plus.png"
							onClick={this.addTime}/>
					</div>

				</div>
			</div>

				<br/>

				<div className="row">
				<div className="col-xs-4"></div>
				<div className="col-xs-4">
					<Link to="/create/review">
						<img className="img-responsive" src="../images/64px-icons/check.png"
							onClick={()=>this.props.setParent(this.state.rest)}/>
					</Link>
				</div>
				<div className="col-xs-4"></div>
				</div>

			</div>
			)
	}
}

export default Time
