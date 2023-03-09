import ACTION_TYPES from '../../constants/actionTypes';
import {USER_LOADER} from './../actions/usersActions';
import {LOAD_USERS_SUCCESS} from './../actions/usersActions';
import {LOAD_USERS_FAILURE} from './../actions/usersActions';


const initialState = {
 accounts: {},
  authUser: {
    isAuthorized: false,
    username: '',
  },
};

//reducer
export function usersReducer(state = initialState,action){
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
  isAuthorized: action.payload,
                  
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


// import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/usersActions";

// const initialState = {
//   data: [],
//   loading: false,
//   error: null,
// };

// export default function usersReducer(state = initialState,{type, payload}){
//   switch(type){
  
//     case LOGIN_SUCCESS:
//       return {
//         ...state,...payload,
//         isAuthenticated: '',
//       };
//     case LOGIN_FAILURE:
//       return {
//         ...state,
//         isAuthenticated: false,
//       };
//     // другие кейсы
//     default:
//       return state;
//   }
// };

