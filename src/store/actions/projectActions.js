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
