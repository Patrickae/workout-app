import React from "react";

import { Link } from "react-router";

class Main extends React.Component{
  constructor(){
    super();

  } //end constructor

  render(){
    return(
      <div className="mainContainer">
        <div className="container-fluid">

          <nav className="navbar navbar-default">
            <div className="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">

                  <button type="button" className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target=".navbar-ex1-collapse"
                    aria-expanded="false">

                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <Link className="navbar-brand" to="/">Workout App</Link>
                </div> {/*Navbar Header*/}

                <div className="collapse navbar-collapse navbar-ex1-collapse">
                  <ul className="nav navbar-nav navbar-right">
                    {/* Using <Link> in place of <a> and "to" in place of "href" */}
                    <li><Link to="/">Create Workout</Link></li>
                    <li><Link to="/">Saved Workouts</Link></li>
                  </ul>
                </div>

              </div>{/*Container Fluid*/}
            </nav>

            {/* Jumbotron */}
            <div className="jumbotron">
              <h2 className="text-center"><strong>Workout helper</strong></h2>
              <h3 className="text-center">Create or choose workouts and let them help you get moving</h3>
            </div>

            {this.props.children}

            <footer>
            <hr/>
            <p className="pull-right">
              <i className="fa fa-github" aria-hidden="true"></i>
              Proudly built using React.js
            </p>
          </footer>

          </div>{/*contianer-Fluid for the whole element*/}
      </div>{/*Main-container*/}
    );
  }

}

export default Main;
