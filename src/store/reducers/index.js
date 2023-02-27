import { combineReducers } from "redux";
import  usersReducer  from "./userReducers";
import  { roomReducer } from "./roomReducers";
import notificationsReducer from "./notificationsReducer";

//const initial = {};

// export function appReducer(state = initial,action){

//   return state;
// }

const rootReducer = combineReducers({
  rooms: roomReducer,
  users: usersReducer,
  notifications: notificationsReducer,
});

export default rootReducer;