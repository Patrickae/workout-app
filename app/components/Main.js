import React from "react";

import { Link } from "react-router";

class Main extends React.Component{


  render(){
    return(
      
        <div className="container-fluid">



        <div className="row" id="navRow">
          <nav className="navbar navbar-inverse" role="navigation">
            <header className="container-fluid">
               
                <div className="navbar-header">

                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-div" aria-expanded="false">

                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <Link className="navbar-brand" to="/">Workout App</Link>
                </div> {/*Navbar Header*/}

                <div className="collapse navbar-collapse" id="nav-div">
                  <ul className="nav navbar-nav" id="nav-links">
                    {/* Using <Link> in place of <a> and "to" in place of "href" */}
                    <li><Link to="/create">Create Workout</Link></li>
                    <li><Link to="/">Edit Saved Workouts</Link></li>
                    <li><Link to="/">Saved Workouts</Link></li>
                    <li><Link to="/">View Profile</Link></li>
                  </ul>
                </div>

              </header>{/*Container Fluid*/}
            </nav>
          </div>



            {this.props.children}

            <footer>
              <hr/>
              <p className="pull-right">
                <i className="fa fa-github" aria-hidden="true"></i>
                Proudly built using React.js
              </p>
            </footer>

          </div>
    );
  }

}

export default Main;
