import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect, Link } from "react-router-dom";
import moment from "moment";

const ProjectDetails = (props) => {
	const { project, auth } = props;
	if (!auth.uid) return <Redirect to="/signin" />;
	if (project) {
		return (
			<div className="container section project-details">
				<div className="card z-depth-0">
					<div className="card-content">
						<span className="card-title purple-text">{project.title}</span>
						<p>{project.details}.</p>
					</div>
					<div className="card-action grey lighten-4 purple-text">
						<div>
							Posted by {project.authorFirstName} {project.authorSecondName}
						</div>
						<div> {moment(project.createdAt.toDate()).calendar()}</div>
					</div>
					<div className="card-action">
						<Link to="/" className="purple-text">
							<button className="btn grey darken-4">back</button>
						</Link>
						<Link to="" className="purple-text">
							<button className="btn grey darken-0">Edit</button>
						</Link>
						<Link to="" className="purple-text">
							<button className="btn red darken-4">Delete</button>
						</Link>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="container center">
				<p>Loading project...</p>
			</div>
		);
	}
};

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	const projects = state.firestore.data.projects;
	const project = projects ? projects[id] : null;
	return {
		project: project,
		auth: state.firebase.auth,
	};
};

export default compose(
	firestoreConnect([{ collection: "projects" }]), // or { collection: 'todos' }
	connect(mapStateToProps)
)(ProjectDetails);
