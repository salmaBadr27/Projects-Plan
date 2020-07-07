import React, { Component } from "react";
import Notifications from "./notifications";
import ProjectLists from "../projects/projectsList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
	// state = {
	// 	searchTerm: "",
	// 	searchResult: [],
	// };

	// handleChange = (e) => {
	// 	this.setState({
	// 		[e.target.id]: e.target.value,
	// 	});
	// };

	// dynamicSearch = () => {
	// 	const results = this.props.projects.filter((project) =>
	// 		project.toLowerCase().includes(this.state.searchTerm)
	// 	);
	// 	this.setState({
	// 		searchResult: results,
	// 	});
	// 	console.log(results);
	// };
	render() {
		const { projects, auth, notifications } = this.props;
		if (!auth.uid) return <Redirect to="/signin" />;
		return (
			<div className="row">
				<div className="col s12 m3 offset-m1">
					<Notifications notifications={notifications} />
				</div>

				<div className="col s12 m6">
					<div className="row">
						<div className="col s12">
							<div className="row">
								<div className="input-field col s12">
									<i className="material-icons prefix">search</i>
									<input
										type="text"
										placeholder="Search"
										id="searchTerm"
										// value={this.state.searchTerm}
										// onChange={this.handleChange}
									></input>
									<label htmlFor="autocomplete-input">Search For Project</label>
								</div>
							</div>
						</div>
					</div>
					<ProjectLists projects={projects} />
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		projects: state.firestore.ordered.projects,
		auth: state.firebase.auth,
		notifications: state.firestore.ordered.notifications,
	};
};

export default compose(
	firestoreConnect([
		{ collection: "projects", orderBy: ["createdAt", "desc"] },
		{ collection: "notifications", limit: 3, orderBy: ["time", "desc"] },
	]), // or { collection: 'todos' }
	connect(mapStateToProps)
)(Dashboard);
