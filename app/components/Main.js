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
    this.setUserId = this.setUserId.bind(this);
  }

  loggedInTrue(){
    this.setState({loggedIn:true})
  }

  setUserId(input){
    this.setState({userId: input});
  }


  render(){
    return(

      <div>
        <Header loggedIn={this.state.loggedIn} userId={this.state.userId} />
        <div className="container-fluid" id="body">
           <Switch>
            <Route path="/home" render={() => {
              return <Home changeLogin={this.loggedInTrue} userId={this.state.userId} />}}/>

            <Route path="/create" render={()=>{
                return<Create userId={this.state.userId}/>}}/>

            <Route exact path="/" render={()=>{
                return<Login setUserId={this.setUserId} />}}/>

            <Route path="/register" render={()=>{
                return<Register />}}/>
           </Switch>
        </div>



      </div>

    );
  }

}

export default Main;
