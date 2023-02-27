import { ROOMS_LOADER,LOAD_ROOMS_SUCCESS, LOAD_ROOMS_FAILURE } from "../actions/roomActions";

const initialRoomState = {};

//reducer
export function roomReducer(state = initialRoomState,action){
  switch(action.type){
    
    case ROOMS_LOADER:
      return {
        ...state,
        rooms: action.payload,
      }
    case LOAD_ROOMS_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        }

    case LOAD_ROOMS_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }

    default:
            return state;
    }
}
