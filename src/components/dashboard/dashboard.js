import React, { Component } from "react";
import Notifications from "./notifications";
import ProjectLists from "../projects/projectsList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Dashboard extends Component {
	render() {
		// console.log(this.props);
		const { projects } = this.props;
		return (
			<div className="row">
				<div className="col s12 m6">
					<ProjectLists projects={projects} />
				</div>
				<div className="col s12 m5 offset-m1">
					<Notifications />
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		projects: state.firestore.ordered.projects,
	};
};

export default compose(
	firestoreConnect([{ collection: "projects" }]), // or { collection: 'todos' }
	connect(mapStateToProps)
)(Dashboard);
