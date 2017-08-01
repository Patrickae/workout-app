import React from "react";
import helpers from "../utils/helpers"
import {Link} from "react-router-dom";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({username: this.refs.username.value})
    this.setState({password: this.refs.password.value})
  }
  render() {
    return (
      <div className="container">
        <div className="text-center">
          <img className="img-responsive" src="../images/dumbbell.png"/>
        </div>
        <br/>
        <legend className="text-center">Login</legend>

        <form className="form-signin" action="/login" method="post">
          <h4>Username</h4>
          <input type="text" name="username" ref="username" value={this.state.username} className="form-control" placeholder="Username" onChange={this.handleChange} required/>
          <h4>Password</h4>
          <input type="password" name="password" ref="password" value={this.state.password} className="form-control" placeholder="Password" onChange={this.handleChange} required/>
          <div className="checkbox"></div>
          <br/>
          <button className="btn btn-lg btn-success btn-block" type="submit" value="Log In">Sign in</button>
          <br/>
        </form>
        <Link to="/register" className="btn btn-lg btn-info btn-block">Register</Link>

      </div>
    )
  }
}

export default Login;
