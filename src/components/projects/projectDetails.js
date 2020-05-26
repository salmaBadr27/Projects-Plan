import React from "react";

const ProjectDetails = (props) => {
	const id = props.match.params.id;
	console.log(id);

	return (
		<div className="container section project-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title purple-text">Project Title</span>
					<p>
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout. The point
						of using Lorem Ipsum is that it has a more-or-less normal
						distribution of letters, as opposed to using 'Content here, content
						here', making it look like readable English. Many desktop publishing
						packages and web page editors now use Lorem Ipsum as their default
						model text, and a search for 'lorem ipsum' will uncover many web
						sites still in their infancy. Various versions have evolved over the
						years, sometimes by accident, sometimes on purpose (injected humour
						and the like).
					</p>
				</div>
				<div className="card-action grey lighten-4 purple-text">
					<div>Posted by salma Badr</div>
					<div>2nd septemper, 2am</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetails;
