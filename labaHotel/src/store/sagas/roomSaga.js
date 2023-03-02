import {put, takeEvery} from 'redux-saga/effects';
import {db} from '../../firebase/firebase';
import { collection, getDocs  } from "firebase/firestore";
 
import { ROOMS_LOADER } from './../../constants/actionTypes';
import { LOAD_ROOMS_DATA } from './../../constants/actionTypes';

 import { showNotification } from '../actions/notificationsActions';
import { NOTIFICATION_MESSAGE, NOTIFICATION_STATUS } from './../../constants/notifications';
import {getRoomsSuccess} from './../actions/roomsActions';
import ACTION_TYPES from './../../constants/actionTypes';



function* getRooms(){

try{
   const querySnapshot = yield (getDocs(collection(db, "rooms")));
 let rooms = []
 querySnapshot.forEach((doc) => {
    rooms.push({...doc.data(), id: doc.id})
    });
    yield put(getRoomsSuccess(rooms));
   }catch(err){
yield put(showNotification(NOTIFICATION_STATUS.ERROR, NOTIFICATION_MESSAGE.GET_ROOMS_ERROR));
   }
}

export default function* watchRoomsData(){

   yield takeEvery(ACTION_TYPES.GET_ROOMS, getRooms);
}