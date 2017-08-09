import React from "react";
import helpers from "../utils/helpers"
import {Link, Route} from "react-router-dom";

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

  componentDidMount() {
    this.props.getUserId(this.state.userId);

  }

  render() {
    console.log(this.props.match.params.userId);

    var myWorkouts = this.state.workouts.map((item) =>
    <div className="list-group-item" key={item._id} onClick={() => {
      this.props.setWorkoutId(item._id)}}>
      <Link to="/workout/overview" className="list-group-item">
        <h4 className="list-group-item-heading">{item.workoutName}</h4>
        <p className="list-group-item-text">{item.description}</p>
      </Link>
    </div>).reverse();

    return (
      <div className="container-fluid" id="home">

        <div className="col-xs-12 col-sm-6">
          <div className="text-center" id="home-header">
            <div className="row home-option" id="home-create">
              <div className="col-xs-12 text-center">
                <Link to="/create/type">
                  <img className="img-responsive" src="../images/64px-icons/compose.png"></img>
                  <h5>Create Workout</h5>
                </Link>
              </div>
            </div>
            <div className="row home-option" id="home-search">
              <div className="col-xs-12 text-center">
                <Link to="/following">
                  <img className="img-responsive" src="../images/64px-icons/followers.png"></img>
                  <h5>Following</h5>
                </Link>
              </div>
            </div>
            <div className="row home-option" id="home-friends">
              <div className="col-xs-12 text-center">
                <Link to="/friendsearch">
                  <img className="img-responsive" src="../images/64px-icons/006-search.png"></img>
                  <h5>Search for Users</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6">
          {/*take user to the create page*/}
          <div className="container-fluid">
            <h3>
              Your Workouts
            </h3>
            <ul className="list-group" id="home-workout-list">
              {myWorkouts}
            </ul>
          </div>
        </div>

      </div>
    );
  }

};

export default Home;
