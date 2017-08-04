import React from "react";
import helpers from "../utils/helpers"
import { Link, Route } from "react-router-dom";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: "123",
      workouts: []
    }
    this.componentWillMount = this.componentWillMount.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentWillMount() {
		var Id = this.props.match.params.userId;
		this.setState({userId: Id})
    helpers.getWorkoutsByUser(Id).then((item) => {
      console.log(item)
      this.setState({workouts: item.data})
    })
		this.props.changeLogin();
  }

	componentDidMount(){
		this.props.getUserId(this.state.userId);

	}

  render() {
		console.log(this.props.match.params.userId);

    var myWorkouts = this.state.workouts.map((item) =>

			<div className="list-group" key={item._id} onClick={()=>{this.props.setWorkoutId(item._id)}}>
			  <Link to="/workout/overview"className="list-group-item">
			    <h4 className="list-group-item-heading">{item.workoutName}</h4>
			    <p className="list-group-item-text">{item.description}</p>
			  </Link>
			</div>).reverse();

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="text-center" id="home-header">
            <div className="row">
              <div className="col-xs-2"></div>
              <div className="col-xs-4 text-center">
                <Link to="/create/type">
                  <img className="img-responsive" src="../images/64px-icons/002-weight.png"></img>
                  <h5>Create Workout</h5>
                </Link>
              </div>
              <div className="col-xs-4 text-center">
                <Link to="/create/type">
                  <img className="img-responsive" src="../images/64px-icons/006-search.png"></img>
                  <h5>Search Workouts</h5>
                </Link>
              </div>
              <div className="col-xs-2"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-4"></div>
          <div className="col-xs-4 text-center">
            <Link to="/create/type">
              <img className="img-responsive" src="../images/64px-icons/network.png"></img>
              <h5>Find friends</h5>
            </Link>
          </div>
          <div className="col-xs-4"></div>
        </div>

        {/*take user to the create page*/}
        <div className="row">
        <h3>
          Your Workouts
        </h3>
        <ul className="list-group" id="home-workout-list">
          {myWorkouts}
        </ul>
      </div>

				<footer className="container-fluid">
				<div>Icons made by
					<a href="http://www.freepik.com" title="Freepik">Freepik</a>
					from
					<a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
					is licensed by
					<a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
				</div>
			</footer>



      </div>
    );
  }

};

export default Home;
