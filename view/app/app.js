import React from "react";
import ReactDom from "react-dom";

//importin routes from the routes file in the config folder
import routes from "./config/routes";

ReactDom.render(routes, document.GetElementById("app"));
