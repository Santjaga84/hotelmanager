export default {
  GET_ACCOUNTS: 'get_accounts',
  GET_ACCOUNTS_SUCCESS: 'get_accounts_success',
  GET_ROOMS: 'get_rooms',
  GET_ROOMS_SUCCESS: 'get_rooms_success',
  SHOW_NOTIFICATION: 'show_notification',
  CLEAR_NOTIFICATIONS: 'clear_notifications',
  LOGIN: 'login',
  LOGIN_SUCCESS: 'login_success',
  LOGOUT: 'logout',
  LOGOUT_SUCCESS: 'logout_success',
  
};

export const ROOMS_LOADER = 'ROOMS_LOADER';
export const LOAD_ROOMS_SUCCESS = 'LOAD_USERS_SUCCESS';
export const LOAD_ROOMS_FAILURE = 'LOAD_USERS_FAILURE';
export const LOAD_USER_DATA = 'LOAD_USER_DATA';
export const LOAD_ROOMS_DATA = 'LOAD_ROOMS_DATA';
export const USER_LOADER = 'USER_LOADER';
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
export const LOAD_USERS_FAILURE = 'LOAD_USERS_FAILURE'

export const requestUserData = () => {
  return { type: LOAD_USER_DATA }
};

export const requestRoomData = () => {
  return { type: LOAD_ROOMS_DATA }
};

