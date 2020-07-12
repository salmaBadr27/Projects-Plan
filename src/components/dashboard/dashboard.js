import React, { Component } from "react";
import Notifications from "./notifications";
import ProjectLists from "../projects/projectsList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { Pagination, Icon, Autocomplete } from "react-materialize";
import { searchProject } from "../../store/actions/projectActions";

class Dashboard extends Component {
	state = {
		searchTerm: "",
	};

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
		this.props.search(this.state.searchTerm);
	};

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
					<ProjectLists projects={projects} auth={auth} />
					<Pagination
						center
						activePage={1}
						items={10}
						leftBtn={<Icon>chevron_left</Icon>}
						maxButtons={8}
						rightBtn={<Icon>chevron_right</Icon>}
					/>
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

const mapDispatchToProps = (dispatch) => {
	return {
		search: (searchTerm) => dispatch(searchProject(searchTerm)),
	};
};
export default compose(
	firestoreConnect([
		{ collection: "projects", orderBy: ["createdAt", "desc"] },
		{ collection: "notifications", limit: 3, orderBy: ["time", "desc"] },
	]),
	connect(mapStateToProps, mapDispatchToProps)
)(Dashboard);
