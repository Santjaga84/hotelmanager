import { USER_LOADER, LOAD_USERS_SUCCESS, LOAD_USERS_FAILURE } from "./../actions/usersActions";

const initialState = {
  users: [],
  status: null,
  error: null,
};

//reducer
export function userReducer(state = initialState,action){
  switch(action.type){
    
    case USER_LOADER:
      return {
        ...state,
        users: action.payload,
      }
    case LOAD_USERS_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        }

    case LOAD_USERS_FAILURE: {
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
