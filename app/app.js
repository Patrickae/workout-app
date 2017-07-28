import React from "react";
import { render } from "react-dom";

//importin routes from the routes file in the config folder
import Router from "./config/routes";
import Home from "./components/Home"
import { BrowserRouter } from 'react-router-dom'

render(<BrowserRouter><Router /></BrowserRouter>, document.getElementById("app"));
