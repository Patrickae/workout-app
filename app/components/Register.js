import React from "react";
import { Link } from "react-router-dom";
import helpers from "../utils/helpers";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange() {
    this.setState({firstName: this.refs.firstName.value})
    this.setState({lastName: this.refs.lastName.value})
    this.setState({email: this.refs.email.value})
    this.setState({username: this.refs.username.value})
    this.setState({password: this.refs.password.value})
    this.setState({confirmPassword: this.refs.confirm.value})
  }
  submitForm(event){
    event.preventDefault();
    var s = this.state;
    var fullName = `${s.firstName} ${s.lastName}`;

    //if passwords match
    if(s.password === s.confirmPassword){
      var newUser={
        name: fullName,
        username: s.username,
        password: s.password,
        email: s.email,
        worouts:[]
      }
      helpers.saveUser(newUser);
    }else{
      return "passwords not a match"
    }

  }
  render() {
    return (
      <div className="container">

        <form>

          <legend className="text-center">Register</legend>

          <fieldset>
            <legend>Account Details</legend>

            <div className="form-group col-xs-6">
              <h5>First Name</h5>
              <input type="text"
                 className="form-control"
                 value={this.state.firstName}
                 ref="firstName"
                 onChange={this.handleChange}
                 placeholder="First Name"
                 required/>
            </div>

            <div className="form-group col-xs-6">
              <h5>Last Name</h5>
              <input type="text"
                className="form-control"
                 value={this.state.lastName}
                ref="lastName"
                onChange={this.handleChange}
                placeholder="Last Name"
                required/>
            </div>

            <div className="form-group col-xs-12">
              <h5>Email</h5>
              <input type="email"
                className="form-control"
                 value={this.state.email}
                ref="email"
                onChange={this.handleChange}
                placeholder="Email"
                required/>
            </div>

            <div className="form-group col-xs-12">
              <h5>Username</h5>
              <input type="text"
                className="form-control"
                 value={this.state.username}
                ref="username"
                onChange={this.handleChange}
                placeholder="Email"/>
            </div>

            <div className="form-group col-xs-6">
              <h5>Password</h5>
              <input type="password"
                className="form-control"
                 value={this.state.password}
                ref="password"
                onChange={this.handleChange}
                 placeholder="Password"/>
            </div>

            <div className="form-group col-xs-6">
              <h5>Confirm Password</h5>
              <input type="password"
                className="form-control"
                value={this.state.confirmPassword}
                ref="confirm"
                onChange={this.handleChange}
                 placeholder="Confirm Password"/>
            </div>

          </fieldset>
          <div className="form-group">
            <div className="col-md-12">
              <button className="btn btn-primary" onClick={this.submitForm}>
                Register
              </button>
              <Link to="/">Already have an account?</Link>
            </div>
          </div>

        </form>

      </div>
    )
  }

}

export default Register;
