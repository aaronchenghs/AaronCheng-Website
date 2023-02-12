const feedbackLoadReducer = (state = {}, action) => {
  switch (action.type) {
    case "load": {
      return action.array;
    }
    default:
      return state;
  }
};

export default feedbackLoadReducer;
