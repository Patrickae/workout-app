import React from "react";
import helpers from "../utils/helpers"
import { Link } from "react-router-dom";


class Home extends React.Component{
	constructor(){
		super();
		this.state = {
			state: true
		}
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
	        	<i className="fa fa-plus-circle fa-5x" aria-hidden="true"></i>
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

	</div>
    );
  }

};

export default Home;
