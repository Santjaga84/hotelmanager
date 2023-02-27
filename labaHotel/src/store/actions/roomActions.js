import ACTION_TYPES from '../../constants/actionTypes';

export const getRooms = () => ({ type: ACTION_TYPES.GET_ROOMS });
export const getRoomsSuccess = (roomsData) => ({ type: ACTION_TYPES.GET_ROOMS_SUCCESS, payload: roomsData });



// export const ROOMS_LOADER = 'ROOMS_LOADER';
// export const LOAD_ROOMS_SUCCESS = 'LOAD_USERS_SUCCESS';
// export const LOAD_ROOMS_FAILURE = 'LOAD_USERS_FAILURE'
