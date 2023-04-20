import { combineReducers } from "redux";
import itemReducer from "./ItemReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  items: itemReducer,
  auth: authReducer
});

export default rootReducer;
