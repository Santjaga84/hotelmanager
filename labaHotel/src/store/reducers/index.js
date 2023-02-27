import { combineReducers } from "redux";
import { userReducer } from "./userReducers";
import { roomReducer } from "./roomReducers";
import notificationsReducer from "./notificationsReducer";

const initial = {};

export function appReducer(state = initial,action){

  return state;
}

const rootReducer = combineReducers({
  userRed: userReducer,
  roomRed: roomReducer,
  notifications: notificationsReducer,
})

export default rootReducer;