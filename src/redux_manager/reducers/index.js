import toggleLightReducer from "./toggleLightMode";
import signIn from "./signIn";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  toggleLight: toggleLightReducer,
  signIn: signIn,
});

export default rootReducer;
