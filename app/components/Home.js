import React from "react";
import helpers from "../utils/helpers"
import { Link } from "react-router-dom";


class Home extends React.Component{
	constructor(){
		super();
		this.state = {
			userId: "123"
		}
		this.componentWillMount=this.componentWillMount.bind(this);
	}

	componentWillMount(){
		helpers.getWorkouts(this.state.userId).then((item) =>{
			console.log(item)})
	}

  render(){

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
				  <li className="list-group-item">Weight Training</li>
				  <li className="list-group-item">HIIT Training</li>
				  <li className="list-group-item">Running intervals</li>
				  <li className="list-group-item">Leg Day</li>
				  <li className="list-group-item">Full Body Strength</li>
				</ul>

		<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

	</div>
    );
  }

};

export default Home;
