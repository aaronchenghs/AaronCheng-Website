const homeFadeReducer = (state = false, action) => {
  switch (action.type) {
    case "HOME_PAGE_FADED_IN":
      return true;
    default:
      return state;
  }
};
export default homeFadeReducer;
