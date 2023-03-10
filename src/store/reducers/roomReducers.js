import { ROOMS_LOADER,LOAD_ROOMS_SUCCESS, LOAD_ROOMS_FAILURE } from "../../constants/actionTypes";
import ACTION_TYPES from './../../constants/actionTypes'

const initialState = {};

//reducer
export default function roomsReducer(state = initialState,{type, payload}){
  switch(type){
    
    case ACTION_TYPES.GET_ROOMS_SUCCESS:
    return { ...state, ...payload };
  case ACTION_TYPES.LOGOUT:
    return initialState;
  default:
    return state;
  }
}
