import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/layout/navbar";
import Dashboard from "./components/dashboard/dashboard";
import ProjectDetails from "./components/projects/projectDetails";
import SignIn from "./components/auth/signIn";
import SignUp from "./components/auth/signUp";
import CreateProject from "./components/projects/createProject";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<NavBar />
				<Switch>
					<Route exact path="/" component={Dashboard}></Route>
					<Route path="/project/:id" component={ProjectDetails}></Route>
					<Route path="/signin" component={SignIn}></Route>
					<Route path="/signup" component={SignUp}></Route>
					<Route path="/create" component={CreateProject}></Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
