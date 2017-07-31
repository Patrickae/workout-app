import React from "react";
import helpers from "../utils/helpers"
import { Link } from "react-router-dom";


class Home extends React.Component{
	constructor(){
		super();
		this.state = {
			userId: "123",
			workouts:[]
		}
		this.componentWillMount=this.componentWillMount.bind(this);
	}

	componentWillMount(){
		helpers.getWorkouts(this.state.userId).then((item) =>{
			console.log(item)
			this.setState({workouts:item.data})
		})

	}

  render(){

		var myWorkouts = this.state.workouts.map((item)=>
		<li key={item._id} className="list-group-item">{item.workoutName}</li>)

    return(
    	<div>
    	  <div className="row">
          	<div className="jumbotron text-center" id="jumbo">
            <h1>Workout helper</h1>
          	</div>
        </div>

    {/*take user to the create page*/}
        <div>
	        <Link to="/create/type">
	        	<img src="../images/dumbbell.png"></img>
	        </Link>
        </div>


    	<h3> Recommended for you </h3>
      	<ul className="list-group">
				  {myWorkouts}
				</ul>

		<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

	</div>
    );
  }

};

export default Home;
