import React from "react";
import ProjectSummary from "./projectSummary";
import { Link } from "react-router-dom";
import { Tab, Tabs } from "react-materialize";

const ProjectsList = ({ projects, auth }) => {
	var myProjects, oldestProjects, newestProjects;
	console.log(projects);
	if (projects) {
		myProjects = projects.filter(function (project) {
			return project.authorId == auth.uid;
		});
		newestProjects = projects.slice().sort((a, b) => {
			return b.createdAt.seconds - a.createdAt.seconds;
		});
		oldestProjects = projects.slice().sort((a, b) => {
			return a.createdAt.seconds - b.createdAt.seconds;
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
				>
					{projects && projects.length !== 0 ? (
						projects.map((project) => {
							return (
								<Link to={"/project/" + project.id} key={project.id}>
									<ProjectSummary project={project} />
								</Link>
							);
						})
					) : (
						<div className="card z-depth-0 project-summary">
							<div className="card-content purple-text text-darken-3">
								<span className="card-title">No Projects Founded 😢</span>
							</div>
						</div>
					)}
				</Tab>
				<Tab
					options={{
						duration: 300,
						onShow: null,
						responsiveThreshold: Infinity,
						swipeable: false,
					}}
					title="My Projects"
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
								<span className="card-title">No Projects Founded 😢</span>
							</div>
						</div>
					)}
				</Tab>
				<Tab
					options={{
						duration: 300,
						onShow: null,
						responsiveThreshold: Infinity,
						swipeable: false,
					}}
					title="Oldest"
				>
					{oldestProjects && oldestProjects.length !== 0 ? (
						oldestProjects.map((project) => {
							return (
								<Link to={"/project/" + project.id} key={project.id}>
									<ProjectSummary project={project} />
								</Link>
							);
						})
					) : (
						<div className="card z-depth-0 project-summary">
							<div className="card-content purple-text text-darken-3">
								<span className="card-title">No Projects Founded 😢</span>
							</div>
						</div>
					)}
				</Tab>
				<Tab
					options={{
						duration: 300,
						onShow: null,
						responsiveThreshold: Infinity,
						swipeable: false,
					}}
					title="Newst"
				>
					{newestProjects && newestProjects.length !== 0 ? (
						newestProjects.map((project) => {
							return (
								<Link to={"/project/" + project.id} key={project.id}>
									<ProjectSummary project={project} />
								</Link>
							);
						})
					) : (
						<div className="card z-depth-0 project-summary">
							<div className="card-content purple-text text-darken-3">
								<span className="card-title">No Projects Founded 😢</span>
							</div>
						</div>
					)}
				</Tab>
			</Tabs>
		</div>
	);
};

export default ProjectsList;
