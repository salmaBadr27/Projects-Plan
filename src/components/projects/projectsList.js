import React from "react";
import ProjectSummary from "./projectSummary";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { firestoreConnect } from "react-redux-firebase";
// import { compose } from "redux";

const ProjectsList = ({ projects }) => {
	// console.log(projects);
	// const { projects } = props;
	// const [searchTerm, setSearchTerm] = React.useState("");
	// const [searchResults, setSearchResults] = React.useState([]);
	// const handleChange = (e) => {
	// 	setSearchTerm(e.target.value);
	// };
	// React.useEffect(() => {
	// 	const results = allptojects.filter((project) =>
	// 		project.title.toLowerCase().includes(searchTerm)
	// 	);
	// 	setSearchResults(results);
	// }, [searchTerm]);

	return (
		<div className="project-list section">
			<h4 className="center purple-text">All Projects</h4>
			{/* <div className="row">
				<div className="col s12">
					<div className="row">
						<div className="input-field col s12">
							<i className="material-icons prefix">search</i>
							<input
								type="text"
								placeholder="Search"
								id="searchTerm"
								value={searchTerm}
								onChange={handleChange}
							></input>
							<label htmlFor="autocomplete-input">Search For Project</label>
						</div>
					</div>
				</div>
			</div> */}
			{projects &&
				projects.map((project) => {
					return (
						<Link to={"/project/" + project.id} key={project.id}>
							<ProjectSummary project={project} />
						</Link>
					);
				})}
		</div>
	);
};

// const mapStateToProps = (state) => {
// 	return {
// 		projects: state.firestore.ordered.projects,
// 	};
// };

// export default compose(
// 	firestoreConnect([{ collection: "projects" }]), // or { collection: 'todos' }
// 	connect(mapStateToProps)
// )(ProjectsList);
export default ProjectsList;
