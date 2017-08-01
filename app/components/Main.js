import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from "./Home";
import Create from "./Create";
import Workout from "./Workout";
import Login from "./Login";
import Register from "./Register";
import Header from "./Header"


class Main extends React.Component{
  constructor(){
    super();
    this.state={
      userId:"",
      loggedIn:false
    }
    this.loggedInTrue = this.loggedInTrue.bind(this);
  }

  loggedInTrue(){

    this.setState({loggedIn: true})
  }

  render(){
    return(

      <div>
        <Header loggedIn={this.state.loggedIn} userId={this.state.userId} changeLogin={this.loggedInTrue}/>
        <div className="container-fluid">
           <Switch>
            <Route path="/home" component={Home} />
            <Route path="/create" component={Create} />
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
           </Switch>
        </div>
      </div>

    );
  }

}

export default Main;
