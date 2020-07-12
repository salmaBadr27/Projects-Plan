import React from "react";
import ProjectSummary from "./projectSummary";
import { Link } from "react-router-dom";
import { Tab, Tabs } from "react-materialize";

const ProjectsList = ({ projects, auth }) => {
	var myProjects;
	if (projects) {
		myProjects = projects.filter(function (project) {
			return project.authorId == auth.uid;
		});
	}

	return (
		<div className="project-list section">
			<Tabs className="tab-demo z-depth-1">
				<Tab
					active
					options={{
						duration: 300,
						onShow: null,
						responsiveThreshold: Infinity,
						swipeable: false,
					}}
					title="All Projects"
					className="myTab"
				>
					{projects &&
						projects.map((project) => {
							return (
								<Link to={"/project/" + project.id} key={project.id}>
									<ProjectSummary project={project} />
								</Link>
							);
						})}
				</Tab>
				<Tab
					options={{
						duration: 300,
						onShow: null,
						responsiveThreshold: Infinity,
						swipeable: false,
					}}
					title="Your Projects"
					className="myTab"
				>
					{myProjects && myProjects.length !== 0 ? (
						myProjects.map((myProject) => {
							return (
								<Link to={"/project/" + myProject.id} key={myProject.id}>
									<ProjectSummary project={myProject} />
								</Link>
							);
						})
					) : (
						<div className="card z-depth-0 project-summary">
							<div className="card-content purple-text text-darken-3">
								<span className="card-title">
									You Dont Have Any Projects Yet !
								</span>
							</div>
						</div>
					)}
				</Tab>
			</Tabs>
		</div>
	);
};

export default ProjectsList;
