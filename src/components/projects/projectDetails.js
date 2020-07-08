import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect, Link } from "react-router-dom";
import moment from "moment";
import { Modal, Button } from "react-materialize";
import { deleteProject } from "../../store/actions/projectActions";

class ProjectDetails extends Component {
	handleDeleteProject = () => {
		const projectId = this.props.projectId;
		this.props.deleteProject(projectId);
		this.props.history.push("/");
	};

	render() {
		const { project, auth } = this.props;

		if (!auth.uid) return <Redirect to="/signin" />;
		if (project) {
			// console.log(project.authorId);
			// console.log(auth.uid);
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

							<Link to="#!" className="purple-text">
								<button
									className="btn grey darken-0"
									disabled={project.authorId !== auth.uid ? true : ""}
									node="button"
								>
									Edit
								</button>
							</Link>
							<Button
								className="btn red darken-4 modal-trigger"
								href="#modal1"
								node="button"
								disabled={project.authorId !== auth.uid ? true : ""}
							>
								Delete
							</Button>
							<Modal
								actions={[
									<Button
										className="btn red darken-4"
										node="button"
										waves="red"
										onClick={this.handleDeleteProject}
									>
										Delete
									</Button>,
									<Button flat modal="close" node="button">
										Cancle
									</Button>,
								]}
								bottomSheet={false}
								fixedFooter={false}
								header="Delete Project"
								id="modal1"
								open={false}
								options={{
									dismissible: true,
									endingTop: "10%",
									inDuration: 250,
									onCloseEnd: null,
									onCloseStart: null,
									onOpenEnd: null,
									onOpenStart: null,
									opacity: 0.5,
									outDuration: 250,
									preventScrolling: true,
									startingTop: "4%",
								}}
							>
								Are You Sure You Want To Delete This Project ?
							</Modal>
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
	}
}

const mapStateToProps = (state, ownProps) => {
	// console.log(state);
	const id = ownProps.match.params.id;
	const projects = state.firestore.data.projects;

	const project = projects ? projects[id] : null;
	return {
		project: project,
		auth: state.firebase.auth,
		projectId: id,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		deleteProject: (projectId) => dispatch(deleteProject(projectId)),
	};
};

export default compose(
	firestoreConnect([{ collection: "projects" }]), // or { collection: 'todos' }
	connect(mapStateToProps, mapDispatchToProps)
)(ProjectDetails);
