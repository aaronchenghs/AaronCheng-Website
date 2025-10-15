const toggleLightReducer = (state = false, action) => {
  console.log(state);
  switch (action.type) {
    case "toggle": {
      return !state;
    }
    default:
      return state;
  }
};

export default toggleLightReducer;
