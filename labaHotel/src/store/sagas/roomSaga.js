import {put, takeEvery} from 'redux-saga/effects';
 import {db} from '../../firebase/firebase';
 import { collection, getDocs  } from "firebase/firestore";
 import { ROOMS_LOADER } from '../actions/roomActions';
 import { LOAD_ROOMS_DATA } from '../actions/actionsSaga';
import { showNotification } from '../actions/notificationsActions';
import { NOTIFICATION_MESSAGE, NOTIFICATION_STATUS } from './../../constants/notifications';


function* getRooms(){

try{
   const querySnapshot = yield (getDocs(collection(db, "rooms")));
 let roomsArr = []
 querySnapshot.forEach((doc) => {
    roomsArr.push({...doc.data(), id: doc.id})
    });
    yield put({type:ROOMS_LOADER,payload:roomsArr});
   }catch(err){
yield put(showNotification(NOTIFICATION_STATUS.ERROR, NOTIFICATION_MESSAGE.GET_ROOMS_ERROR));
   }
}

export default function* watchRoomsData(){

   yield takeEvery(ACTION_TYPES.GET_ROOMS, getRooms);
}