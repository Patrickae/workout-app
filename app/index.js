import React from "react";
import { render } from "react-dom";

//importin routes from the routes file in the config folder
import App from "./config/App";
import { HashRouter } from 'react-router-dom'

render((<HashRouter><App /></HashRouter>), document.getElementById("app"));
