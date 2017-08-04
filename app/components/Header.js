import React from "react";
import {Link} from 'react-router-dom'



class Header extends React.Component {

  render(){

		if (this.props.loggedIn === true) {
			var tabs =
				<ul className="nav navbar-nav" id="nav-links">
					<li>
						<Link to={"/home/"+this.props.userId}>
              <img src="../images/64px-icons/home.png" className="img-responsive" alt="home"/>
						</Link>
					</li>
					<li>
						<Link to="/create/type">Create Workout</Link>
					</li>
					<li onClick={this.props.loggedInFalse}>
						<Link to="/">This will also log you out</Link>
					</li>
					<li onClick={this.props.loggedInFalse}>
						<Link to="/">Logout</Link>
					</li>
				</ul>


		} else {
			var tabs =
				<ul className="nav navbar-nav" id="nav-links">
					<li>
						<Link to="/">Log In</Link>
					</li>
					<li>
						<Link to="/register">Register</Link>
					</li>
				</ul>

		}

    return (
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
                <Link className="navbar-brand" to={"/home/"+this.props.userId}>Workout App</Link>
              </div>
              {/*Navbar Header*/}

              <div className="collapse navbar-collapse" id="nav-div">


                  {tabs}

              </div>

            </header>{/*Container Fluid*/}
          </nav>
        </div>
      </div>
    )
  }
}

export default Header;
