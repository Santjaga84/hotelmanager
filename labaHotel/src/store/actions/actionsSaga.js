export const LOAD_USER_DATA = 'LOAD_USER_DATA';
export const LOAD_ROOMS_DATA = 'LOAD_ROOMS_DATA';

export const requestUserData = () => {
  return { type: LOAD_USER_DATA }
};

export const requestRoomData = () => {
  return { type: LOAD_ROOMS_DATA }
};