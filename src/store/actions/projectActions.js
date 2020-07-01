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
