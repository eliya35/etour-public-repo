import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import App from './App'
import reportWebVitals from "./reportWebVitals";
// import CommentsApp from "./components/comments/ReturnComments";

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root"),
);

reportWebVitals();
