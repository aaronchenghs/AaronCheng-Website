const toggleLightReducer = (state = true, action) => {
  switch (action.type) {
    case "toggle": {
      return !state;
    }
    default:
      return state;
  }
};

export default toggleLightReducer;
