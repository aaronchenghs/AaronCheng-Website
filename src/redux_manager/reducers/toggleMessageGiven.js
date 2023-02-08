const toggleMessageGiven = (state = false, action) => {
  switch (action.type) {
    case "given": {
      return true;
    }
    default:
      return state;
  }
};

export default toggleMessageGiven;
