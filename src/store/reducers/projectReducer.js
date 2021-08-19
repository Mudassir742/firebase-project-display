const initialState = {
  projects: [
    { id: "1", title: "Horizon Forbidden", content: "Lorem ipsum dolor sit" },
    { id: "2", title: "The Lost Empire", content: "Lorem ipsum dolor sit" },
    { id: "3", title: "Far Cry", content: "Lorem ipsum dolor sit" },
    { id: "4", title: "Assassin Creed", content: "Lorem ipsum dolor sit" },
  ],
};

const ProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT": {
      console.log("Create Project", action.payload);
      return state;
    }
    case "CREATE_PROJECT_ERR": {
      console.log("Create Project err", action.payload);
      return state;
    }
    default:
      return state;
  }
};

export default ProjectReducer;
