import React from "react";

const ProjectSummary = ({ project }) => {
	return (
		<div className="card z-depth-0 project-summary">
			<div className="card-content purple-text text-darken-3">
				<span className="card-title">{project.title}</span>
				<p className="black-text darken-1">Posted By Salma Badr</p>
				<p className="grey-text">3rd july</p>
			</div>
		</div>
	);
};

export default ProjectSummary;
