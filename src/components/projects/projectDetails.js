import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const ProjectDetails = (props) => {
	const { project } = props;
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
						<div>2nd sep , 2 am</div>
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
	// console.log(state);
	const id = ownProps.match.params.id;
	const projects = state.firestore.data.projects;
	const project = projects ? projects[id] : null;
	return {
		project: project,
	};
};

export default compose(
	firestoreConnect([{ collection: "projects" }]), // or { collection: 'todos' }
	connect(mapStateToProps)
)(ProjectDetails);
