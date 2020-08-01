import React, { Component } from "react";
import Notifications from "./notifications";
import ProjectLists from "../projects/projectsList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { Icon, Autocomplete } from "react-materialize";

class Dashboard extends Component {
	state = {
		searchTerm: "",
		searchResult: [],
	};

	handleChange = (e) => {
		const { projects, isLoaded } = this.props;
		const { searchTerm } = this.state;
		this.setState({
			[e.target.id]: e.target.value,
		});

		if (isLoaded) {
			const results = projects.filter(function (project) {
				return project.title.toLowerCase().includes(searchTerm);
			});
			this.setState({
				searchResult: results,
			});
		}
	};

	render() {
		const { projects, auth, notifications, isLoaded } = this.props;
		if (!auth.uid) return <Redirect to="/signin" />;
		if (isLoaded) {
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
										<Autocomplete
											value={this.state.searchTerm}
											onChange={this.handleChange}
											icon={<Icon>search</Icon>}
											id="searchTerm"
											// options={{
											// 	data: this.state.data,
											// }}
											placeholder="Search For Project"
										/>
									</div>
								</div>
							</div>
						</div>
						<ProjectLists
							projects={
								this.state.searchTerm === ""
									? projects
									: this.state.searchResult
							}
							auth={auth}
						/>
					</div>
				</div>
			);
		}
		return (
			<div className="container loading">
				<div className="purple-text center-wrapper">
					<div className="progress">
						<div className="indeterminate"></div>
					</div>
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
		isLoaded: state.firebase.profile.isLoaded,
	};
};

export default compose(
	firestoreConnect([
		{ collection: "projects", orderBy: ["createdAt", "desc"] },
		{ collection: "notifications", limit: 10, orderBy: ["time", "desc"] },
	]),
	connect(mapStateToProps)
)(Dashboard);
