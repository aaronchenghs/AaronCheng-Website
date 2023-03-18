import toggleLightReducer from "./toggleLightMode";
import signIn from "./signIn";
import homeFadeReducer from "./homeFadeReducer";
import toggleMessageGiven from "./toggleMessageGiven";
import navReducer from "./navReducer";
import feedbackLoadReducer from "./feedbackRenderReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  toggleLight: toggleLightReducer,
  signIn: signIn,
  toggleMessageGiven: toggleMessageGiven,
  navReducer: navReducer,
  feedbackLoadReducer: feedbackLoadReducer,
  homeFadeReducer: homeFadeReducer,
});

export default rootReducer;
