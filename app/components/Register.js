import React from "react";
import { Link } from "react-router-dom";
import helpers from "../utils/helpers";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {

    }

  }

  render() {
    return (
      <div>
      <h2 className="page-header">Register</h2>
      <form method="post" action="/api/users">
   <div className="form-group">
    <h4>Name</h4>
    <input type="text" className="form-control" placeholder="Name" name="name"/>
  </div>
  <div className="form-group">
    <h4>Username</h4>
    <input type="text" className="form-control" placeholder="Username" name="username"/>
  </div>
   <div className="form-group">
    <h4>Email</h4>
    <input type="email" className="form-control" placeholder="Email" name="email"/>
  </div>
  <div className="form-group">
    <h4>Password</h4>
    <input type="password" className="form-control" placeholder="Password" name="password"/>
  </div>
  <div className="form-group">
    <h4>confirm Password</h4>
    <input type="password" className="form-control" placeholder="Password" name="password2"/>
  </div>
  <button type="submit" className="btn btn-default">Submit</button>
</form>
</div>
    )
  }

}

export default Register;
