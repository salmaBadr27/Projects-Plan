const initState = {
	projects: [
		{ id: "1", title: "help me find peach", details: "blah blah blah" },
		{ id: "2", title: "collect all the stars", details: "blah blah blah" },
		{ id: "3", title: "egg hunt with yoshi", details: "blah blah blah" },
	],
};

const projectReducer = (state = initState, action) => {
	switch (action.type) {
		case "ADD_PROJECT":
			console.log("done", action.project);
			return state;
		case "CREATE_PROJECT_ERROR":
			console.log("ERR", action.error);
			return state;
		default:
			return state;
	}
};
export default projectReducer;
