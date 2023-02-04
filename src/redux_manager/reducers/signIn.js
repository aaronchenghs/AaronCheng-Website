const signIn = (state = false, action) => {
  switch (action.type) {
    case "signin": {
      return true;
    }
    default:
      return state;
  }
};

export default signIn;
