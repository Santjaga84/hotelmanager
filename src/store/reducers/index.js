import { combineReducers } from "redux";
import  {userReducer}  from "./userReducers";
import   roomsReducer  from "./roomReducers";
import notificationsReducer from "./notificationsReducer";

// const initial = {};

// export function appReducer(state = initial,action){

//   return state;
// }

const rootReducer = combineReducers({
  rooms: roomsReducer,
  users: userReducer,
  notifications: notificationsReducer,
});

export default rootReducer;