import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import location from "./location";

export default combineReducers({
  auth,
  message,
  location
});