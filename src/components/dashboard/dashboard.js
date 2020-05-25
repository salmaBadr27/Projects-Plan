import React, { Component } from "react";
import Notifications from "./notifications";
import ProjectLists from "../projects/projectsList";

class Dashboard extends Component {
	render() {
		return (
			<div className="row">
				<div className="col s12 m6">
					<ProjectLists />
				</div>
				<div className="col s12 m5 offset-m1">
					<Notifications />
				</div>
			</div>
		);
	}
}
export default Dashboard;
