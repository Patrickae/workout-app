import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Main from "../components.Main";
import Home from "../components.Home";

export default (
  // High level component is the Router component.
  <Router history={browserHistory}>
    <Route path="/" component={Main}>

      {/* If user selects Search or Saved show the appropriate component */}
      <Route path="Home" component={Home} />


      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={Home} />

    </Route>
  </Router>
);
