import {put, takeEvery, call} from 'redux-saga/effects';
import {db} from '../../firebase/firebase';
import { collection, getDocs, doc, updateDoc  } from "firebase/firestore";
import { showNotification } from '../actions/notificationsActions';
import { NOTIFICATION_MESSAGE, NOTIFICATION_STATUS } from './../../constants/notifications';
import {getRoomsSuccess, updateRoomSuccess} from './../actions/roomsActions';
import ACTION_TYPES from './../../constants/actionTypes';
import moment from 'moment';


function* getRooms(){

try{
   const querySnapshot = yield (getDocs(collection(db, "rooms")));
 let rooms = []
 querySnapshot.forEach((doc) => {
    rooms.push({...doc.data(), id: doc.id})
    });
    console.log("aga",rooms);
    yield put(getRoomsSuccess(rooms));
   }catch(err){
yield put(showNotification(NOTIFICATION_STATUS.ERROR, NOTIFICATION_MESSAGE.GET_ROOMS_ERROR));
   }
}

// function* updateRoom(id, updatedFields) {
//    const roomsRef = db.child('rooms');
//   try {
//    const updateRoomFirebase = (id, data) => {
//   roomsRef
//     .orderByChild('id')
//     .equalTo(id)
//     .on('child_added', async (snapshot) => {
//       await snapshot.ref.update(data);
//     });
// };
//      yield call(updateRoomFirebase, id, updatedFields);
//     yield put(updateRoomSuccess(id, updatedFields));
//     yield put(showNotification(NOTIFICATION_STATUS.SUCCESS, NOTIFICATION_MESSAGE.UPDATE_ROOM_SUCCESS));
//   } catch (err) {
//     yield put(showNotification(NOTIFICATION_STATUS.ERROR, NOTIFICATION_MESSAGE.UPDATE_ROOM_ERROR));
//   }
// }

function* updateRoom(id, updatedFields) {
  try {
    const roomsRef = updateDoc(doc(db, 'rooms', id));
    yield call([roomsRef, 'update'], updatedFields); // обновляем запись в базе данных
    yield put(updateRoomSuccess(id, updatedFields));
    yield put(showNotification(NOTIFICATION_STATUS.SUCCESS, NOTIFICATION_MESSAGE.UPDATE_ROOM_SUCCESS));
  } catch (err) {
    yield put(showNotification(NOTIFICATION_STATUS.ERROR, NOTIFICATION_MESSAGE.UPDATE_ROOM_ERROR));
  }
}

function* checkInRoom({ payload }) {
  const { id, guest, checkOutDate } = payload;

  const updatedFields = {
    checkInDate: moment().format('YYYY-MM-DD'),
    isCheckedIn: true,
    guest,
    ...(checkOutDate && { checkOutDate: checkOutDate.format('YYYY-MM-DD') }),
  };
  yield updateRoom(id, updatedFields);
}

function* checkOutRoom({ payload }) {
  const { id } = payload;
  const updatedFields = {
    checkInDate: null,
    checkOutDate: null,
    isCheckedIn: false,
    guest: '',
  };
  yield updateRoom(id, updatedFields);
}


export default function* watchRoomsData(){

   yield takeEvery(ACTION_TYPES.GET_ROOMS, getRooms);
   yield takeEvery(ACTION_TYPES.CHECK_IN, checkInRoom);
   yield takeEvery(ACTION_TYPES.CHECK_OUT, checkOutRoom)
}