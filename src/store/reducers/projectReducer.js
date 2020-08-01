const initState = {
	projects: [],
	Err: "",
};

const projectReducer = (state = initState, action) => {
	switch (action.type) {
		case "ADD_PROJECT":
			return state;

		case "CREATE_PROJECT_ERROR":
			return state;
		case "DELETE_PROJECT_SUCCESS":
			return {
				...state,
				projects: action.projects,
			};
		case "DELETE_PROJECT_ERROR":
			return {
				...state,
				Err: action.error,
			};
		case "SEARCH_PROJECT_SUCCESS":
			console.log("search", action.projects);
			return {
				...state,
				projects: action.projects,
			};
		case "SEARCH_PROJECT_FAIL":
			return {
				...state,
				Err: action.msg,
			};
		case "EDIT_PROJECT_SUCCESS":
			return {
				...state,
				projects: action.projects,
			};
		case "EDIT_PROJECT_FAIL":
			return {
				...state,
				Err: action.error,
			};
		default:
			return state;
	}
};

export default projectReducer;
