const navReducer = (state = "home", action) => {
  switch (action.type) {
    case "home": {
      return "home";
    }
    case "vita": {
      return "vita";
    }
    case "feedback": {
      return "feedback";
    }
    case "contactme": {
      return "contactme";
    }
    case "portfolio": {
      return "portfolio";
    }
    default:
      return state;
  }
};

export default navReducer;
