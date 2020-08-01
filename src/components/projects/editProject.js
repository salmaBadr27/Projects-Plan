import React, { Component } from "react";
import create from "../img/create.png";
import { connect } from "react-redux";
import { editProject } from "../../store/actions/projectActions";
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class EditProject extends Component {
	state = {
		title: this.props.isLoaded ? this.props.project.title : "",
		details: this.props.isLoaded ? this.props.project.details : "",
	};

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.editProject(this.props.projectId, this.state);
		this.props.history.push("/");
	};

	render() {
		const { auth, project, isLoaded } = this.props;

		if (!auth.uid) return <Redirect to="/signin" />;
		if (isLoaded)
			return (
				<div className="container">
					<div className=" card row">
						<div className="  col s12 m6">
							<form
								onSubmit={this.handleSubmit}
								className="card-content white "
							>
								<h5 className="purple-text text-darken-3">Edit Project</h5>
								<div className="input-field"></div>
								<label htmlFor="title">Project Title</label>
								<input
									required
									type="text"
									name=""
									id="title"
									defaultValue={project.title}
									onChange={this.handleChange}
								/>
								<div className="input-field"></div>
								<label htmlFor="details">Details</label>
								<textarea
									required
									id="details"
									cols="30"
									rows="10"
									className="materialize-textarea"
									defaultValue={project.details}
									onChange={this.handleChange}
								></textarea>

								<div className="input-field center">
									<button
										onChange={this.handleSubmit}
										className="btn purple lighten-1 z-depth-0 white-text center"
									>
										Edit
									</button>
								</div>
							</form>
						</div>
						<div className="col s12 m5 center">
							<img
								className="materialboxed responsive-img"
								width="300"
								src={create}
								alt=""
							/>
						</div>
					</div>
				</div>
			);
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
const mapDispatchToProps = (dispatch) => {
	return {
		editProject: (id, project) => dispatch(editProject(id, project)),
	};
};
const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	const projects = state.firestore.data.projects;

	const project = projects ? projects[id] : null;
	return {
		project: project,
		auth: state.firebase.auth,
		projectId: id,
		isLoaded: state.firebase.profile.isLoaded,
	};
};
export default compose(
	firestoreConnect([{ collection: "projects" }]), // or { collection: 'todos' }
	connect(mapStateToProps, mapDispatchToProps)
)(EditProject);
