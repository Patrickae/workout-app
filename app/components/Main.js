import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from "./Home";
import Create from "./Create";
import Workout from "./Workout";


class Main extends React.Component{


  render(){
    return(
      
      <div className="container-fluid">
       <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/create" component={Create} />
       </Switch>
      </div>
      
    );
  }

}

export default Main;
