import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    if (this.props.loggedIn === true) {
      //if the logged in status is true, show these nav otions
      var tabs = (
        <ul className="nav navbar-nav" id="nav-links">
          <li>
            <Link to={'/home/' + this.props.userId}>Home</Link>
          </li>
          <li>
            <Link to="/create/type">Create Workout</Link>
          </li>
          <li>
            <Link to="/friendsearch">Search Users</Link>
          </li>
          <li>
            <Link to="/following">Your Friends</Link>
          </li>
          <li>
            <Link to="/edit">Edit</Link>
          </li>
          <li onClick={this.props.loggedInFalse}>
            <Link to="/">Logout</Link>
          </li>
          <li>
            <a href="https://github.com/Patrickae/workout-app" target="_blank">
              <i className="fa fa-github fa-3x" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/andrew-patrick-0653a161/" target="_blank">
              <i className="fa fa-linkedin fa-3x" />
            </a>
          </li>
        </ul>
      )
    } else {
      //if logged in status is false, show these nav options
      var tabs = (
        <ul className="nav navbar-nav" id="nav-links">
          <li>
            <Link to="/">Log In</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <a href="https://github.com/Patrickae/workout-app" target="_blank">
              <i className="fa fa-github fa-3x" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/andrew-patrick-0653a161/" target="_blank">
              <i className="fa fa-linkedin fa-3x" />
            </a>
          </li>
        </ul>
      )
    }

    return (
      <div className="container-fluid">
        <div className="row" id="navRow">
          <nav className="navbar navbar-inverse" role="navigation">
            <header className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#nav-div"
                  aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <div className="navbar-brand">Workout App</div>
              </div>
              {/*Navbar Header*/}

              <div className="collapse navbar-collapse" id="nav-div">
                {tabs}
              </div>
            </header>
            {/*Container Fluid*/}
          </nav>
        </div>
      </div>
    )
  }
}

export default Header
