const signIn = (state = false, action) => {
  switch (action.type) {
    case "signin": {
      return true;
    }
    default:
      return state;
  }
};

export const isLoadingFeedbacks = (state = true, action) => {
  switch (action.type) {
    case "loadedFeedbacks": {
      return false;
    }
    default:
      return state;
  }
};

export default signIn;
