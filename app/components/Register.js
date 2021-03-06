import React from 'react'
import { Link } from 'react-router-dom'
import helpers from '../utils/helpers'

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      //these states contain input values
      name: '',
      username: '',
      email: '',
      password: '',
      password2: '',
      //touched values will change to true once touched
      //this will allow inputs to diplay if they are missing info
      touched: {
        name: false,
        username: false,
        email: false,
        password: false,
        password2: false,
      },
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.checkForError = this.checkForError.bind(this)
    this.passwordMatch = this.passwordMatch.bind(this)
  }
  //set input values and state when typing in inputs
  handleChange() {
    this.setState({ name: this.refs.name.value })
    this.setState({ username: this.refs.username.value })
    this.setState({ email: this.refs.email.value })
    this.setState({ password: this.refs.password.value })
    this.setState({ password2: this.refs.password2.value })
  }

  //argument will be the input form name
  handleBlur(input) {
    var touched = this.state.touched
    var stateHolder = this.state[input]
    //change touched to true if still blank after blur
    if (stateHolder === '') {
      touched[input] = true
      this.setState({ touched: touched })
      //keep showing false if not empty after blur
    } else {
      touched[input] = false
      this.setState({ touched: touched })
    }
  }

  //if touched is true, return a value that will change the color of the input
  checkForError(input) {
    if (this.state.touched[input] === true) {
      return 'form-group has-error'
    } else {
      return 'form-group'
    }
  }

  //on blur, change color of password inputs depending on state
  passwordMatch() {
    var p1 = this.state.password
    var p2 = this.state.password2
    //if both empty, keep standard
    if (p1 === '' && p2 === '') {
      return 'form-group'
      //if p2 is empty but p1 is not, make inputs orange
    } else if (p1 != '' && p2 === '') {
      return 'form-group has-warning'
      //if they dont match, and not empty, make red
    } else if (p1 != p2) {
      return 'form-group has-error'
      //if both are matching, make green
    } else {
      return 'form-group has-success'
    }
  }

  render() {
    return (
      <div className="container">
        <h2 className="page-header">Register</h2>
        <form method="post" action="/new/users">
          <div className={this.checkForError('name')}>
            <h4>Name</h4>
            <input
              required
              type="text"
              className="form-control"
              ref="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Name"
              name="name"
              onBlur={() => {
                this.handleBlur('name')
              }}
            />
          </div>
          <div className={this.checkForError('username')}>
            <h4>Username</h4>
            <input
              required
              type="text"
              className="form-control"
              ref="username"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="Username"
              name="username"
              onBlur={() => {
                this.handleBlur('username')
              }}
            />
          </div>
          <div className={this.checkForError('email')}>
            <h4>Email</h4>
            <input
              required
              type="email"
              className="form-control"
              ref="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Email"
              name="email"
              onBlur={() => {
                this.handleBlur('email')
              }}
            />
          </div>
          <div className={this.passwordMatch()}>
            <h4>Password</h4>
            <input
              required
              type="password"
              className="form-control"
              ref="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Password"
              name="password"
              onBlur={() => {
                this.handleBlur('password')
              }}
            />
          </div>
          <div className={this.passwordMatch()}>
            <h4>confirm Password</h4>
            <input
              required
              type="password"
              className="form-control"
              ref="password2"
              value={this.state.password2}
              onChange={this.handleChange}
              placeholder="Password"
              name="password2"
              onBlur={() => {
                this.handleBlur('password2')
              }}
            />
          </div>
          <button type="submit" className="btn btn-success btn-lg btn-block">
            Submit
          </button>
          <br />
        </form>
        <Link to="/" className="btn btn-danger btn-lg btn-block">
          Back
        </Link>
        <br />
      </div>
    )
  }
}

export default Register
