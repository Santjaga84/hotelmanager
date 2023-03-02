import { USER_LOADER, LOAD_USERS_SUCCESS, LOAD_USERS_FAILURE } from "./../actions/usersActions";

const initialState = {
 accounts: {},
  authUser: {
    isAuthorized: false,
    username: '',
  },
};

//reducer
export function userReducer(state = initialState,action){
  switch(action.type){
    
    case USER_LOADER:
      return {
        ...state,
        accounts: action.payload,
      }
    case LOAD_USERS_SUCCESS: {
            return {
                ...state,
                authUser: {  
  isAuthorized: true,
                  
                }
            };
        }

    case LOAD_USERS_FAILURE: {
            return {
                ...state,
                isAuthorized: false,
               
            };
        }

    default:
            return state;
    }
}
