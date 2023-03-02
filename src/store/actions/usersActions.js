export const USER_LOADER = 'USER_LOADER';
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
export const LOAD_USERS_FAILURE = 'LOAD_USERS_FAILURE'

export const LOAD_USER_DATA = 'LOAD_USER_DATA';

export const requestUserData = () => {
  return { type: LOAD_USER_DATA }
};
