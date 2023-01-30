import toggleLightReducer from "./toggleLightMode";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  toggleLight: toggleLightReducer,
});

export default rootReducer;
