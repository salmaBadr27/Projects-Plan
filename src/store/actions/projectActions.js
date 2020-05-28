//action creators for create project component

export const createProject = (project) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		//make async call to db

		//firestore reference
		const fireStoreRef = getFirestore();
		//add functionality
		fireStoreRef
			.collection("projects")
			.add({
				...project,
				authFirestName: "salma",
				authSecondName: "badr",
				authId: 123,
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
