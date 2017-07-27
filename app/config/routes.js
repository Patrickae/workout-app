// // Inclue the React library
// var React = require("react");
import React from "react";
import { Route, IndexRoute, Router, browserHistory} from "react-router";

// // Include the react-router module
// // Include the Route component
// //  Include the IndexRoute (catch-all route)
// // Include the Router component
// // Include the browserHistory prop to configure client side routing

import Main from "../components/Main";
import Home from "../components/Home";
import Create from "../components/Create";
import Type from "../components/Create/Type";
import Exercises from "../components/Create/Exercises";
import Name from "../components/Create/Name";


module.exports = (
  // High level component is the Router component.
  <Router history={browserHistory}>
    <Route path="/" component={Main}>

      {/* If user selects Search or Saved show the appropriate component */}
      <Route path="Home" component={Home} />

      <Route path="Create" component={Create}>

      	<Route path="Type" render={() => {return(<Type workout={Create.state} handleChange={Create.handleChange} handleSubmit={Create.handleSubmit}/>)}} />
      	<Route path="Exercises" component={Exercises} />
      	<Route path="Name" component={Name} />

      	<IndexRoute component={Type} />

      </Route>
      
      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={Home} />

    </Route>
  </Router>
);
