import ACTION_TYPES from '../../constants/actionTypes';

export const getAccounts = () => ({ type: ACTION_TYPES.GET_ACCOUNTS });
export const getAccountsSuccess = (accountData) => ({ type: ACTION_TYPES.GET_ACCOUNTS_SUCCESS, payload: accountData });
export const logIn = (userData) => ({ type: ACTION_TYPES.LOGIN, payload: userData });
export const logInSuccess = (userData) => ({ type: ACTION_TYPES.LOGIN_SUCCESS, payload: userData });
export const logOut = () => ({ type: ACTION_TYPES.LOGOUT });
export const logOutSuccess = () => ({ type: ACTION_TYPES.LOGOUT_SUCCESS });




export const USER_LOADER = 'USER_LOADER';
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
export const LOAD_USERS_FAILURE = 'LOAD_USERS_FAILURE'

export const LOAD_USER_DATA = 'LOAD_USER_DATA';

export const requestUserData = () => {
  return { type: LOAD_USER_DATA }
};
