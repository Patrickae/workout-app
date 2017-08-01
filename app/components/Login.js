import React from "react";
import helpers from "../utils/helpers"
import { Link } from "react-router-dom";

class Login extends React.Component{
  constructor(){
    super();
    this.state={username:"",
                password:""
              }

  }

  render(){
    return(
      <div>
      <form action="/login" method="post">
          <div>
              <label>Username:</label>
              <input type="text" name="username"/>
          </div>
          <div>
              <label>Password:</label>
              <input type="password" name="password"/>
          </div>
          <div>
              <input type="submit" value="Log In"/>
          </div>
      </form>
      <div>
      <Link to="/register"><button className="btn btn-success">Register</button></Link>
      </div>
    </div>
    )
  }
}

export default Login;
