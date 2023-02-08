import toggleLightReducer from "./toggleLightMode";
import signIn from "./signIn";
import toggleMessageGiven from "./toggleMessageGiven";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  toggleLight: toggleLightReducer,
  signIn: signIn,
  toggleMessageGiven: toggleMessageGiven,
});

export default rootReducer;
