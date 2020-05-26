import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/layout/navbar";
import Dashboard from "./components/dashboard/dashboard";
import ProjectDetails from "./components/projects/projectDetails";
import signIn from "./components/auth/signIn";
import signUp from "./components/auth/signUp";
import CreateProject from "./components/projects/createProject";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<NavBar />
				<Switch>
					<Route exact path="/dashboard" component={Dashboard}></Route>
					<Route path="/project/:id" component={ProjectDetails}></Route>
					<Route path="/signin" component={signIn}></Route>
					<Route path="/signup" component={signUp}></Route>
					<Route path="/create" component={CreateProject}></Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
