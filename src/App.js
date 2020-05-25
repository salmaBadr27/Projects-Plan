import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/layout/navbar";
import Dashboard from "./components/dashboard/dashboard";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<NavBar />
				<Switch>
					<Route path="/dashboard" component={Dashboard}></Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
