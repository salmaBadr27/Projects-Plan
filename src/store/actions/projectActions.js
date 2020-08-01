//action creators for create project component

export const createProject = (project) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		//make async call to db

		//firestore reference
		const fireStoreRef = getFirestore();
		const profile = getState().firebase.profile;
		const authorId = getState().firebase.auth.uid;

		//add functionality
		fireStoreRef
			.collection("projects")
			.add({
				...project,
				authorFirstName: profile.firstName,
				authorLastName: profile.lastName,
				authorId: authorId,
				createdAt: new Date(),
			})
			.then(() => {
				dispatch({
					type: "ADD_PROJECT",
					project,
				});
			})
			.catch((err) => {
				dispatch({ type: "CREATE_PROJECT_ERROR", error: err });
			});
	};
};

export const deleteProject = (projectId) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const fireStoreRef = getFirestore();
		const authorId = getState().firebase.auth.uid;
		const projects = getState().firestore.data.projects;

		console.log("projid", projectId);
		console.log("authid", authorId);

		fireStoreRef
			.collection("projects")
			.doc(projectId)
			.delete()
			.then(() => {
				dispatch({ type: "DELETE_PROJECT_SUCCESS", projects });
			})
			.catch((err) => {
				dispatch({ type: "DELETE_PROJECT_ERROR", error: err });
			});
	};
};
export const editProject = (projectId, project) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const fireStoreRef = getFirestore();
		const authorId = getState().firebase.auth.uid;
		const projects = getState().firestore.data.projects;

		console.log("projid", projectId);
		console.log("authid", authorId);

		fireStoreRef
			.collection("projects")
			.doc(projectId)
			.update({
				details: project.details,
				title: project.title,
			})
			.then(() => {
				dispatch({ type: "EDIT_PROJECT_SUCCESS", projects });
			})
			.catch((error) => {
				dispatch({ type: "EDIT_PROJECT_ERROR", error });
			});
	};
};
export const searchProject = (searchTerm) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const fireStoreRef = getFirestore();

		var projects = getState().firestore.ordered.projects;
		console.log(projects);
		const projectsArray = Object.keys(projects).map((i) => projects[i]);
		const results = projectsArray.filter(function (project) {
			return project.title.toLowerCase().includes(searchTerm);
		});

		if (results) {
			projects = results;
			console.log(projects);
			dispatch({ type: "SEARCH_PROJECT_SUCCESS", projects });
		}

		dispatch({ type: "SEARCH_PROJECT_FAIL", msg: "no projects found" });
	};
};
