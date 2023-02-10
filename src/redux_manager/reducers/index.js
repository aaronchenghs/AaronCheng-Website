import toggleLightReducer from "./toggleLightMode";
import signIn from "./signIn";
import toggleMessageGiven from "./toggleMessageGiven";
import navReducer from "./navReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  toggleLight: toggleLightReducer,
  signIn: signIn,
  toggleMessageGiven: toggleMessageGiven,
  navReducer: navReducer,
});

export default rootReducer;
