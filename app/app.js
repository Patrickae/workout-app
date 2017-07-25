import React from "react";
import ReactDOM from "react-dom";

//importin routes from the routes file in the config folder
import routes from "./config/routes";
import Home from "./components/Home"

ReactDOM.render(routes, document.getElementById("app"));
