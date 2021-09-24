import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import roomsReducer from "./rooms_reducer";

export default combineReducers({
  users: usersReducer,
  rooms: roomsReducer
})